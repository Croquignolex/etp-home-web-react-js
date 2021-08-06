import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import actions from "./actions";
import helpers from "../../helpers"

// Attempt user identification from API
export function* emitAttemptUserIdentification() {
    yield takeLatest(actions.middlewares.EMIT_ATTEMPT_USER_IDENTIFICATION, function*({phone}) {
        try {
            // Fire event for request init
            yield put(actions.requests.storeAttemptUserIdentificationRequestInit());
            // API call
            yield call(helpers.xhr.apiPostRequest, `${API_SERVER_URL}/identification`, {phone});
            // Fire event for request succeeded
            yield put(actions.requests.storeAttemptUserIdentificationRequestSucceeded());
        } catch (message) {
            // Fire event for request failed
            yield put(actions.requests.storeAttemptUserIdentificationRequestFailed());
            yield put(storeSetErrorData({message}));
        }
    });
}

// Combine to export all functions at once
export default function* sagaUser() {
    yield all([
        fork(emitAttemptUserIdentification),
    ]);
}