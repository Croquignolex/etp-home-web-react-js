const STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT = 'STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT';
const STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_RESET = 'STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_RESET';
const STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED = 'STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED';
const STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED = 'STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED';

export default {
    STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT,
    STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_RESET,
    STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED,
    STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED,

    // Set init data into store
    storeAttemptUserIdentificationRequestInit: () => ({
        type: STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT
    }),
    // Set failed data into store
    storeAttemptUserIdentificationRequestFailed: ({message}) => ({
        payload: {message},
        type: STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED
    }),
    // Set success data into store
    storeAttemptUserIdentificationRequestSucceeded: ({login, message}) => ({
        payload: {login, message},
        type: STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED
    }),
    // Set reset data into store
    storeAttemptUserIdentificationRequestReset: () => ({
        type: STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_RESET
    }),
}

