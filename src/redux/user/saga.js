import axios from "axios";
import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import {storeSetErrorData} from "../errors/actions";
import {EMIT_ATTEMPT_USER_IDENTIFICATION} from "./actions";
import {API_SERVER_URL} from "../../constants/defaultConstants";
import {storeRequestInit, storeRequestFailed} from "../requests/actions";

// Attempt user authentication from API
export function* emitAttemptUserIdentification() {
    yield takeLatest(EMIT_ATTEMPT_USER_IDENTIFICATION, function*({phone}) {
        try {
            // Fire event for request
            yield put(storeRequestInit());
            // API call
            const apiResponse = yield call(apiPostRequest, `${API_SERVER_URL}/identification`, {phone});

            const roleData = apiResponse.role;
            console.log("API repose.role ======> ", roleData)
            // TODO: redirzect from the corerzct rolze

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
        fork(emitAttemptUserIdentification)
    ]);
}