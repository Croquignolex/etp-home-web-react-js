import actions from "../actions";
import helpers from "../../../helpers";

// Authentication partial store
const initialState = {
    failed: false, loading: false, succeeded: false
};

export default {
    reduce: (state = initialState, action) => {
        let nextState;
        switch (action.type) {

            // Resolve event to set authentication init request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT:
                nextState = helpers.requests.requestInitValue();
                return nextState || state;
            // Resolve event to set authentication failed request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED:
                nextState = helpers.requests.requestFailedValue(action.message);
                return nextState || state;
            // Resolve event to set authentication failed request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED:
                nextState = helpers.requests.requestSucceededValue(action.message);
                return nextState || state;

            // Unknown action
            default: return state;
        }
    }
}
