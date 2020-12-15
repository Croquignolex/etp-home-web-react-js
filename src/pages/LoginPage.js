import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import FormInput from "../components/FormInput";
import ErrorAlert from "../components/ErrorAlert";
import {storeResetErrorData} from "../redux/errors/actions";

// Component
function LoginPage({errors, requests, dispatch}) {
    // Local state
    const [inputEnable, setInputEnable] = useState(true);

    // local effects
    useEffect(() => {
        document.title = "Identification - MMAC";
    }, []);

    // Handle phone input
    const handlePhoneInput = (phone) => {
        dispatch(storeResetErrorData());

        if(phone.length === 9) {
            setInputEnable(false);
        }
    }

    // Trigger login form submit
    const handleSubmit = (e) => {
       /* e.preventDefault();
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
        } else playWarningSound();*/
    };

    // Render
    return (
        <div className="auth-home">
            <div className="login-box">
                {/* Logo */}
                <div className="login-logo">
                    <span><img alt="..." width="100" src={require('../assets/images/logo.png')} /></span>
                </div>
                <div className="card no-shadow">
                    <div className="card-body login-card-body">
                        {/* Error message */}
                        {errors.show && <ErrorAlert message={errors.message} />}
                        {/* Identification form */}
                        <form name="form" className="text-center">
                            {/* Input */}
                            <FormInput inputEnable={inputEnable} handleInput={handlePhoneInput} />
                            {/* loader */}
                            {!inputEnable && (
                                <img width={70}
                                     alt='loading...'
                                     src={require('../assets/images/spinner-theme.svg')}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer area */}
            <footer className="app-footer text-right absolute-position">
                <small>
                    <strong>Copyright &copy; 2020.</strong>
                    &nbsp;&nbsp; All rights reserved.
                </small>
            </footer>
        </div>
    )
}

// Prop types to ensure destroyed props data type
LoginPage.propTypes = {
    errors: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired
};

export default React.memo(LoginPage);