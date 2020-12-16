import axios from "axios";
import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import {storeSetErrorData} from "../errors/actions";
import {API_SERVER_URL} from "../../constants/defaultConstants";
import {EMIT_ATTEMPT_USER_AUTHENTICATION, EMIT_ATTEMPT_USER_IDENTIFICATION} from "./actions";
import {storeRequestInit, storeRequestFailed, storeRequestSucceeded} from "../requests/actions";

// Attempt user identification from API
export function* emitAttemptUserIdentification() {
    yield takeLatest(EMIT_ATTEMPT_USER_IDENTIFICATION, function*({phone}) {
        try {
            // Fire event for request
            yield put(storeRequestInit());
            // API call
            yield call(apiPostRequest, `${API_SERVER_URL}/identification`, {phone});
            yield put(storeRequestSucceeded());
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed());
            yield put(storeSetErrorData({message}));
        }
    });
}

// Attempt user authentication from API
export function* emitAttemptUserAuthentication() {
    yield takeLatest(EMIT_ATTEMPT_USER_AUTHENTICATION, function*({phone, password}) {
        try {
            // Fire event for request
            yield put(storeRequestInit());
            // API call
            const apiResponse = yield call(apiPostRequest, `${API_SERVER_URL}/login`, {phone, password});
            const {role, token} = apiResponse;

            switch (role) {
                case 'ADMIN': window.location.replace("https://etp-admin.moyo-industry.com?token=" + token); break;
                case 'AGENT': window.location.replace("https://etp-agent.moyo-industry.com?token=" + token); break;
                case 'RESSOURCE': window.location.replace("https://etp-resource.moyo-industry.com?token=" + token); break;
                case 'SUPERVISEUR': window.location.replace("https://etp-supervisor.moyo-industry.com?token=" + token); break;
                case 'GESTIONNAIRE DE FLOTTE': window.location.replace("https://etp-manager.moyo-industry.com?token=" + token); break;
                case 'RESPONSABLE DE ZONNE': window.location.replace("https://etp-collector.moyo-industry.com?token=" + token); break;
                default: window.location.replace("https://etp.moyo-industry.com");
            }
        } catch (message) {
            // Fire event for request
            yield put(storeRequestFailed());
            yield put(storeSetErrorData({message}));
        }
    });
}

function apiPostRequest(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                const apiResponse = res.data;
                apiResponse.status
                    ? resolve(apiResponse.data)
                    : reject(apiResponse.message);
            })
            .catch(e => {
                reject(apiErrorManagement(e.message));
                if(process.env.NODE_ENV !== 'production') console.log({e});
            })
    });
}

function apiErrorManagement(errorMessage) {
    switch (errorMessage) {
        case "Network Error": return "Erreur du reseau. Merci de vérifier votre connexion internet";
        default: return errorMessage;
    }
}

// Combine to export all functions at once
export default function* sagaUser() {
    yield all([
        fork(emitAttemptUserAuthentication),
        fork(emitAttemptUserIdentification),
    ]);
}