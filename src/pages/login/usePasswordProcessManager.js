import {useState, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import helpers from "../../helpers";
import constants from "../../constants";
import actions from "../../redux/authentication/actions";

export const usePasswordProcessManager = () => {
    // Local state
    const [password, setPassword] = useState(constants.generals.DEFAULT_INPUT);

    // Redux
    const dispatch = useDispatch();
    const {login, role, token, authenticationRequest} = useSelector(state => ({
        role: state.authentication.role,
        login: state.identification.login,
        token: state.authentication.token,
        authenticationRequest: state.authentication.requests
    }), shallowEqual);

    const authenticationRequestFailed = helpers.requests.requestFailed(authenticationRequest);
    const authenticationRequestProcessing = helpers.requests.requestLoading(authenticationRequest);
    const authenticationRequestSucceeded = helpers.requests.requestSucceeded(authenticationRequest);

    // Local effects
    useEffect(() => {
        if(authenticationRequestSucceeded) {
            // Redirect to the corresponding user role
            switch (role) {
                case constants.roles.ADMIN: redirect(constants.urls.PROFILE.ADMIN); break;
                case constants.roles.AGENT: redirect(constants.urls.PROFILE.AGENT); break;
                case constants.roles.MANAGER: redirect(constants.urls.PROFILE.MANAGER); break;
                case constants.roles.RESOURCE: redirect(constants.urls.PROFILE.RESOURCE); break;
                case constants.roles.OVERSEER: redirect(constants.urls.PROFILE.OVERSEER); break;
                case constants.roles.COLLECTOR: redirect(constants.urls.PROFILE.COLLECTOR); break;
                case constants.roles.SUPERVISOR: redirect(constants.urls.PROFILE.SUPERVISOR); break;
                case constants.roles.ACCOUNTANT: redirect(constants.urls.PROFILE.ACCOUNTANT); break;
                default: window.location.replace(constants.urls.PROFILE.APP);
            }
        }
        // eslint-disable-next-line
    }, [authenticationRequestSucceeded]);


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
        validationOK && dispatch(actions.middlewares.emitAttemptUserAuthentication({login, password: _password.data}));
    }

    // Error reset
    const errorReset = () => {
        authenticationRequestFailed && dispatch(actions.cores.storeAttemptUserAuthenticationRequestReset());
    }

    // Redirect to URL
    const redirect = (url) => {
        window && window.location.replace(`${url}?token=${token}`);
    }

   return {login, password, authenticationRequestProcessing, handlePasswordInput, handleAuthentication}
}