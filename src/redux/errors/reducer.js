import {STORE_RESET_ERROR_DATA, STORE_SET_ERROR_DATA} from "./actions";

// Partial global store for error data management
const initialState = {
    show: false,
    message: ''
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to reset error store data
        case STORE_RESET_ERROR_DATA:
            nextState = {...initialState};
            return nextState || state;
        // Resolve event to set error store data
        case STORE_SET_ERROR_DATA:
            nextState = {...state, show: true, message: action.message};
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce