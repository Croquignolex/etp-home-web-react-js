import React from 'react';
import {useSelector} from "react-redux";

export const useLoginPageManager = () => {
    // Redux
    const identificationRequest = useSelector(state => state.identification.requests);
    const authenticationRequest = useSelector(state => state.authentication.requests);
    const showPasswordProcess = useSelector(state => state.identification.cores.isIdentify);

    return {showPasswordProcess, identificationRequest, authenticationRequest};


    // const identificationRequestProcessing = helpers.requests.requestLoading(identificationRequest);
    //     const authenticationRequestProcessing = helpers.requests.requestLoading(authenticationRequest);
}