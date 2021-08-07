import { all, takeLatest, put, fork, call } from 'redux-saga/effects'

import actions from "./actions";
import helpers from "../../helpers"
import constants from "../../constants"

// Attempt user authentication from API
export function* emitAttemptUserAuthentication() {
    yield takeLatest(actions.middlewares.EMIT_ATTEMPT_USER_AUTHENTICATION, function*({phone, password}) {
        try {
            // Fire event for request init
            yield put(actions.requests.storeAttemptUserAuthenticationRequestInit());
            // API call
            const apiResponse = yield call(helpers.xhr.apiPostRequest, constants.urls.AUTHENTICATION, {phone, password});
            const {role, token} = apiResponse;
            // Fire event for request succeeded
            yield put(actions.requests.storeAttemptUserAuthenticationRequestSucceeded({message: apiResponse.message}));
        } catch (message) {
            // Fire event for request failed
            yield put(actions.requests.storeAttemptUserAuthenticationRequestFailed({message}));
        }
    });
}

// Combine to export all functions at once
export default function* sagaUser() {
    yield all([
        fork(emitAttemptUserAuthentication)
    ]);
}