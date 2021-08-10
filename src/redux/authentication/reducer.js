import actions from "./actions";
import helpers from "../../helpers";

// Authentication partial store
const initialState = {
    role: '',
    token: '',
    requests: {failed: false, loading: false, succeeded: false, message: ''}
};

const reduce = (state = initialState, action) => {
    let nextState;
    switch (action.type) {

        // Resolve event to set authentication init request store data
        case actions.cores.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT:
            nextState = {
                ...state,
                requests: helpers.requests.requestInitValue()
            };
            return nextState || state;
        // Resolve event to set authentication failed request store data
        case actions.cores.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED:
            nextState = {
                ...state,
                requests: helpers.requests.requestFailedValue(action.payload.message)
            };
            return nextState || state;
        // Resolve event to set authentication failed request store data
        case actions.cores.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED:
            nextState = {
                ...state,
                role: action.payload.role,
                token: action.payload.token,
                requests: helpers.requests.requestSucceededValue(action.payload.message)
            };
            return nextState || state;
        // Resolve event to set authentication reset request store data
        case actions.cores.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_RESET:
            nextState = {
                ...state,
                requests: initialState.requests
            };
            return nextState || state;

        // Unknown action
        default: return state;
    }
}

export default reduce;
