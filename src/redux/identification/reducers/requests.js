import actions from "../actions";
import helpers from "../../../helpers";

// Authentication partial store
const initialState = {
    failed: false, loading: false, succeeded: false, message: ''
};

export default {
    reduce: (state = initialState, action) => {
        let nextState;
        switch (action.type) {

            // Resolve event to set identification init request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT:
                nextState = helpers.requests.requestInitValue();
                return nextState || state;
            // Resolve event to set identification failed request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED:
                nextState = helpers.requests.requestFailedValue(action.message);
                return nextState || state;
            // Resolve event to set identification failed request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED:
                nextState = helpers.requests.requestSucceededValue(action.message);
                return nextState || state;
            // Resolve event to set identification reset request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_RESET:
                nextState = initialState;
                return nextState || state;

            // Unknown action
            default: return state;
        }
    }
}
