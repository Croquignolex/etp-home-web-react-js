import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import helpers from "../../helpers";
import constants from "../../constants";
import actions from "../../redux/authentication/actions";

export const usePasswordProcessManager = () => {
    // Local state
    const [password, setPassword] = useState(constants.generals.DEFAULT_INPUT);

    // Redux
    const dispatch = useDispatch();
    const {login, authenticationRequestProcessing} = useSelector(state => ({
        login: state.identification.login,
        authenticationRequestProcessing: helpers.requests.requestLoading(state.authentication.requests)
    }), shallowEqual);

    // Handle password input
    const handlePasswordInput = (data) => {
        // Reset error data
        dispatch(actions.requests.storeAttemptUserAuthenticationRequestReset());
        // Set password data
        setPassword({...password, data});
    }

    // Form submission
    const handleAuthentication = (e) => {
        e.preventDefault();
        // Reset error data
        dispatch(actions.requests.storeAttemptUserAuthenticationRequestReset());
        // Form input checker
        const _password = helpers.formChecker.requiredChecker(password);
        setPassword(_password);
        const validationOK = _password.isValid;
        // Check
        if(validationOK) dispatch(actions.middlewares.emitAttemptUserAuthentication({phone: login, password}));
        else helpers.sounds.playWarningSound();
    }

   return {login, authenticationRequestProcessing, handlePasswordInput, handleAuthentication}
}