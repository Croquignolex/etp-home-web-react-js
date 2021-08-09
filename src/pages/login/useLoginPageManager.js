import React from 'react';
import {useSelector, shallowEqual} from "react-redux";

export const useLoginPageManager = () => {
    // Redux
    const {identificationRequest, showPasswordProcess, authenticationRequest} = useSelector(state => ({
        identificationRequest: state.identificationRequests,
        authenticationRequest: state.authenticationRequests,
        showPasswordProcess: state.identificationCores.isIdentify
    }), shallowEqual);

    return {showPasswordProcess, identificationRequest, authenticationRequest};
}