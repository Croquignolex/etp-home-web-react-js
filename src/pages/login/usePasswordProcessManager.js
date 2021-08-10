import {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import helpers from "../../helpers";
import constants from "../../constants";
import actions from "../../redux/authentication/actions";

export const usePasswordProcessManager = () => {
    // Local state
    const [password, setPassword] = useState(constants.generals.DEFAULT_INPUT);

    // Redux
    const dispatch = useDispatch();
    const {login, authenticationRequest} = useSelector(state => ({
        login: state.identification.login,
        authenticationRequest: state.authentication.requests
    }), shallowEqual);

    const authenticationRequestFailed = helpers.requests.requestFailed(authenticationRequest);
    const authenticationRequestProcessing = helpers.requests.requestLoading(authenticationRequest);

    // Handle password input
    const handlePasswordInput = (data) => {
        // Reset error data
        errorReset();
        // Set password data
        setPassword({...password, data});
    }

    // Form submission
    const handleAuthentication = (e) => {
        e.preventDefault();
        // Reset error data
        errorReset();
        // Form input checker
        const _password = helpers.formChecker.requiredChecker(password);
        setPassword(_password);
        const validationOK = _password.isValid;
        // Check
        if(validationOK) dispatch(actions.middlewares.emitAttemptUserAuthentication({login, password: _password.data}));
        else helpers.sounds.playWarningSound();
    }

    // Error reset
    const errorReset = () => {
        authenticationRequestFailed && dispatch(actions.cores.storeAttemptUserAuthenticationRequestReset());
    }

   return {login, authenticationRequestProcessing, handlePasswordInput, handleAuthentication}
}