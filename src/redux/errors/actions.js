// Reducer action types
export const STORE_SET_ERROR_DATA = 'STORE_SET_ERROR_DATA';
export const STORE_RESET_ERROR_DATA = 'STORE_RESET_ERROR_DATA';

//====================== Reducer trigger actions
// Empty error data into store
export const storeResetErrorData = () => ({
    type: STORE_RESET_ERROR_DATA
});

// Set error data in store
export const storeSetErrorData = ({message}) => ({
    message,
    type: STORE_SET_ERROR_DATA
});
