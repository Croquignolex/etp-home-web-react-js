import actions from "../actions";

// Authentication partial store
const initialState = {login: '', isIdentify: false};

export default {
    reduce: (state = initialState, action) => {
        let nextState;
        switch (action.type) {

            // Resolve event to set role and token store data
            case actions.cores.STORE_SET_IDENTIFY_DATA:
                nextState = {isIdentify: true, login: action.payload.login};
                return nextState || state;

            // Unknown action
            default: return state;
        }
    }
}
