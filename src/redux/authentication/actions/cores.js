const STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT = 'STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT';
const STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_RESET = 'STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_RESET';
const STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED = 'STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED';
const STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED = 'STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED';

export default {
    STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT,
    STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_RESET,
    STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED,
    STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED,

    // Set init data into store
    storeAttemptUserAuthenticationRequestInit: () => ({
        type: STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT
    }),
    // Set failed data into store
    storeAttemptUserAuthenticationRequestFailed: ({message}) => ({
        payload: {message},
        type: STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED
    }),
    // Set success data into store
    storeAttemptUserAuthenticationRequestSucceeded: ({role, token, message}) => ({
        payload: {role, token, message},
        type: STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED
    }),
    // Set reset data into store
    storeAttemptUserAuthenticationRequestReset: () => ({
        type: STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_RESET
    }),
}


