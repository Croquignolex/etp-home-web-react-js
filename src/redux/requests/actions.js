// Reducer action types
export const STORE_REQUEST_INIT = 'STORE_REQUEST_INIT';
export const STORE_REQUEST_FAILED = 'STORE_REQUEST_FAILED';
export const STORE_REQUEST_SUCCEEDED = 'STORE_REQUEST_SUCCEEDED';

//====================== Reducer trigger actions
// Set init data into store
export const storeRequestInit = () => ({
    type: STORE_REQUEST_INIT
});

// Set failed data into store
export const storeRequestFailed = () => ({
    type: STORE_REQUEST_FAILED
});

// Set success data into store
export const storeRequestSucceeded = () => ({
    type: STORE_REQUEST_SUCCEEDED
});

