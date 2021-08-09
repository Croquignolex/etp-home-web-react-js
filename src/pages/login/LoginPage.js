import React from 'react';

import LoginProcess from "./LoginProcess";
import DomTitle from "../../shared/DomTitle";
import PasswordProcess from "./PasswordProcess";
import {useLoginPageManager} from "./useLoginPageManager";
import ErrorAlertComponent from "../../shared/ErrorAlert";

const LoginPage = () => {
    // Component custom hooks
    const {showPasswordProcess, identificationRequest, authenticationRequest} = useLoginPageManager();

    return (
        <div className="auth-home">
            <div className="login-box">
                {/* Logo */}
                <div className="login-logo">
                    <span><img alt="..." width="100" src={require('../../assets/images/logo.png')} /></span>
                </div>
                <div className="card no-shadow">
                    <div className="card-body login-card-body">
                        {/* Error message */}
                        {<ErrorAlertComponent request={identificationRequest} />}
                        {<ErrorAlertComponent request={authenticationRequest} />}
                        <div className="text-center">
                            {showPasswordProcess
                                ? (
                                    <>
                                        <DomTitle title={"Authentification - MMAC"} />
                                        <PasswordProcess />
                                    </>
                                )
                                : (
                                    <div>
                                        <DomTitle title={"Identification - MMAC"} />
                                        <LoginProcess />
                                    </div>
                                )
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

export default React.memo(LoginPage);