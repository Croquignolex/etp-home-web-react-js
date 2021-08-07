import actions from "../actions";

// Authentication partial store
const initialState = {
    role: '', token: ''
};

export default {
    reduce: (state = initialState, action) => {
        let nextState;
        switch (action.type) {

            // Resolve event to set role and token store data
            case actions.cores.STORE_SET_ROLE_AND_TOKEN_DATA:
                nextState = {role: action.role, token: action.token};
                return nextState || state;

            // Unknown action
            default: return state;
        }
    }
}
