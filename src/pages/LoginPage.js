import React, {useContext, useEffect, useState} from 'react';

import Footer from "../components/Footer";
import Input from "../components/auth/form/Input";
import ErrorAlert from "../components/ErrorAlert";
import {storeResetErrorData} from "../redux/errors/actions";
import AppHigherOrder from "../components/layout/AppHigherOrder";
import {emitAttemptUserAuthentication} from "../redux/user/actions";
import {phoneChecker, passwordChecker} from "../helpers/formsChecker";
import {DEFAULT_FORM_DATA, LOGIN_SCOPE} from "../helpers/constants";
import {DispatchContext, ErrorsContext, RequestsContext} from "../helpers/contexts";
import {shouldShowError, playWarningSound} from "../helpers/functions";

// Component
function LoginPage() {
    // Local state
    const [username, setUsername] = useState(DEFAULT_FORM_DATA);
    const [password, setPassword] = useState(DEFAULT_FORM_DATA);

    // Context states
    const errors = useContext(ErrorsContext);
    const requests = useContext(RequestsContext);
    const dispatch = useContext(DispatchContext);

    // Data
    const scope = LOGIN_SCOPE;
    const shouldResetErrorData = () => {
        shouldShowError(scope, errors.list) && dispatch(storeResetErrorData({scope}));
    };

    useEffect(() => {
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldResetErrorData();
        };
        // eslint-disable-next-line
    }, [scope]);

    // Trigger login form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        shouldResetErrorData();
        const _username = phoneChecker(username);
        const _password = passwordChecker(password);
        // Set value
        setUsername(_username);
        setPassword(_password);
        const validationOK = _username.isValid && _password.isValid;
        // Check
        if(validationOK) {
            dispatch(emitAttemptUserAuthentication({
                phone: _username.val,
                password: _password.val
            }));
        } else playWarningSound();
    };

    // Render
    return (
        <>
            <div className="auth-home">
                <div className="login-box">
                    <div className="login-logo">
                        <span><img alt="..." width="100" src={require('../assets/images/logo.png')} /></span>
                    </div>
                    <div className="card no-shadow">
                        <div className="card-body login-card-body">
                            {shouldShowError(scope, errors.list) &&
                                <ErrorAlert scope={scope} />
                            }
                            <form name="form">
                                <Input type='number'
                                       input={username}
                                       icon='fas fa-phone'
                                       label='Numéro de téléphone'
                                       handleInput={(isValid, val) => {
                                           shouldResetErrorData();
                                           setUsername({...username, isValid, val});
                                       }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <Footer needAbsolutePosition={true} />
            </div>
        </>
    )
}

export default AppHigherOrder(LoginPage);