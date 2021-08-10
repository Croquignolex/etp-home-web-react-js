import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import actions from "./actions";
import helpers from "../../helpers"
import constants from "../../constants"

// Attempt user identification from API
export function* emitAttemptUserIdentification() {
    yield takeLatest(actions.middlewares.EMIT_ATTEMPT_USER_IDENTIFICATION, function*({payload}) {
        try {
            const {login} = payload;
            // Fire event for request init
            yield put(actions.requests.storeAttemptUserIdentificationRequestInit());
            // API call
            const apiResponse = yield call(helpers.xhr.apiPostRequest, constants.urls.IDENTIFICATION, {phone: login});
            const {message} = apiResponse;
            // Fire event for request succeeded
            yield put(actions.requests.storeAttemptUserIdentificationRequestSucceeded({login, message}));
        } catch (message) {
            // Fire event for request failed
            yield put(actions.requests.storeAttemptUserIdentificationRequestFailed({message}));
        }
    });
}

// Combine to export all functions at once
export default function* sagaUser() {
    yield all([
        fork(emitAttemptUserIdentification),
    ]);
}