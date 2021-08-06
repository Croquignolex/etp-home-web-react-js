import actions from "../actions";
import helpers from "../../../helpers";

// Authentication partial store
const initialState = {
    identification: {failed: false, loading: false, succeeded: false},
    authentication: {failed: false, loading: false, succeeded: false}
};

export default {
    reduce: (state = initialState, action) => {
        let nextState;
        switch (action.type) {

            // Resolve event to set identification init request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_INIT:
                nextState = {...state, identification: helpers.requests.requestLoading()};
                return nextState || state;
            // Resolve event to set identification failed request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_FAILED:
                nextState = {...state, identification: helpers.requests.requestFailed()};
                return nextState || state;
            // Resolve event to set identification failed request store data
            case actions.requests.STORE_ATTEMPT_USER_IDENTIFICATION_REQUEST_SUCCEEDED:
                nextState = {...state, identification: helpers.requests.requestSucceeded()};
                return nextState || state;

            // Resolve event to set authentication init request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_INIT:
                nextState = {...state, authentication: helpers.requests.requestLoading()};
                return nextState || state;
            // Resolve event to set authentication failed request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_FAILED:
                nextState = {...state, authentication: helpers.requests.requestFailed()};
                return nextState || state;
            // Resolve event to set authentication failed request store data
            case actions.requests.STORE_ATTEMPT_USER_AUTHENTICATION_REQUEST_SUCCEEDED:
                nextState = {...state, authentication: helpers.requests.requestSucceeded()};
                return nextState || state;

            // Unknown action
            default: return state;
        }
    }
}
