import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import FormInput from "../components/FormInput";

// Component
function LoginPage({errors, requests, user, dispatch}) {
    // Local state
    const [phone, setPhone] = useState({isValid: true, message: '', val: ''});

    useEffect(() => {
        document.title = "Identification - MMAC";
    }, []);

    const handlePhoneInput = (isValid, val) => {
        // shouldResetErrorData();
        setPhone({...phone, isValid, val});
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
                <div className="login-logo">
                    <span><img alt="..." width="100" src={require('../assets/images/logo.png')} /></span>
                </div>
                <div className="card no-shadow">
                    <div className="card-body login-card-body">
                        {/*{shouldShowError(scope, errors.list) &&
                            <ErrorAlert scope={scope} />
                        }*/}
                        {errors.show &&
                            <ErrorAlert scope={scope} />
                        }
                        <form name="form">
                            <FormInput type='number'
                                   input={phone}
                                   icon='fas fa-phone'
                                   label='Numéro de téléphone'
                                   handleInput={handlePhoneInput}
                            />
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
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired
};

export default React.memo(LoginPage);