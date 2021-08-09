import actions from "../actions";

// Authentication partial store
const initialState = {role: '', token: ''};

const reduce = (state = initialState, action) => {
    let nextState;
    switch (action.type) {

        // Resolve event to set role and token store data
        case actions.cores.STORE_SET_ROLE_AND_TOKEN_DATA:
            nextState = {role: action.payload.role, token: action.payload.token};
            return nextState || state;

        // Unknown action
        default: return state;
    }
}

export default reduce;