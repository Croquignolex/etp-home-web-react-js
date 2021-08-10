import React from 'react';
import {useSelector, shallowEqual} from "react-redux";

export const useLoginPageManager = () => {
    // Redux
    const {identificationRequest, showPasswordProcess, authenticationRequest} = useSelector(state => ({
        identificationRequest: state.identification.requests,
        authenticationRequest: state.authentication.requests,
        showPasswordProcess: state.identification.isIdentify
    }), shallowEqual);

    return {showPasswordProcess, identificationRequest, authenticationRequest};
}