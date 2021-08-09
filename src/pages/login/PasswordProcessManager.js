import React, {useLayoutEffect, useState} from 'react';

import actions from "../../redux/authentication/actions"
import constants from "../../constants"

export const PasswordProcessManager = () => {
    // Local state
    const [password, setPassword] = useState(constants.generals.DEFAULT_INPUT);

    // Handle password input
    const handlePasswordInput = (dispatch, data) => {
        dispatch(actions.requests.storeAttemptUserAuthenticationRequestReset());
        setPassword({...password, data});
    }

    // Form submission
   /* const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeResetErrorData());
        dispatch(emitAttemptUserAuthentication({phone: login, password}));
    }*/

   return {password, handlePasswordInput}
}