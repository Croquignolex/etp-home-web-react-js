import React, {useState} from 'react';

import actions from "../../redux/authentication/actions";
import constants from "../../constants";
import helpers from "../../helpers";

export const PasswordProcessManager = ({dispatch, login}) => {
    // Local state
    const [password, setPassword] = useState(constants.generals.DEFAULT_INPUT);

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

   return {handlePasswordInput, handleAuthentication}
}