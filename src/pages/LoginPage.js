import PropTypes from "prop-types";
import React, {useEffect, useState} from 'react';

import ErrorAlertComponent from "../components/ErrorAlertComponent";
import LoginProcessComponent from "../components/LoginProcessComponent";
import PasswordProcessComponent from "../components/PasswordProcessComponent";

// Component
function LoginPage({errors, requests, dispatch}) {
    // Local state
    const [login, setLogin] = useState('');
    const [identified, setIdentified] = useState(false);

    // local effects
    useEffect(() => {
        document.title = "Identification - MMAC";
    }, []);

    const handleLogin = (data) => {
        setLogin(data)
    }

    const handleIdentified = (data) => {
        setIdentified(true)
    }

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
                        {errors.show && <ErrorAlertComponent message={errors.message} />}
                        <div className="text-center">
                            {/* Input */}
                            {identified
                                ? <PasswordProcessComponent dispatch={dispatch} login={login} />
                                : <LoginProcessComponent dispatch={dispatch} handleLogin={handleLogin} handleIdentified={handleIdentified} />
                            }
                        </div>
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