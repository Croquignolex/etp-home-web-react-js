import {STORE_REQUEST_INIT, STORE_REQUEST_FAILED, STORE_REQUEST_SUCCEEDED} from "./actions";

// Partial global store for requests data management
const initialState = {
    failed: false,
    loading: false,
    succeeded: false
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to set init request store data
        case STORE_REQUEST_INIT:
            nextState = {...state, failed: true, loading: true, succeeded: false};
            return nextState || state;
        // Resolve event to set failed request store data
        case STORE_REQUEST_FAILED:
            nextState = {...state, failed: true, loading: false, succeeded: false};
            return nextState || state;
        // Resolve event to set failed request store data
        case STORE_REQUEST_SUCCEEDED:
            nextState = {...state, failed: false, loading: false, succeeded: true};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce
