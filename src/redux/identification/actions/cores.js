const STORE_SET_IDENTIFY_DATA = 'STORE_SET_IDENTIFY_DATA';

export default {
    STORE_SET_IDENTIFY_DATA,

    // Put role and token into redux
    storeSetIdentifyData: ({login}) => ({
        payload: {login},
        type: STORE_SET_IDENTIFY_DATA
    })
}

