const STORE_SET_ROLE_AND_TOKEN_DATA = 'STORE_SET_ROLE_AND_TOKEN_DATA';

export default {
    STORE_SET_ROLE_AND_TOKEN_DATA,

    // Put role and token into redux
    storeSetRoleAndTokenData: ({role, token}) => ({
        role,
        token,
        type: STORE_SET_ROLE_AND_TOKEN_DATA
    })
}

