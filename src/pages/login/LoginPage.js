import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import LoginProcess from "./LoginProcess";
import PasswordProcess from "./PasswordProcess";
import ErrorAlertComponent from "../../shared/ErrorAlert";
import helpers from "../../helpers"

const LoginPage = ({authenticationData, identificationData, identificationRequest, authenticationRequest, dispatch}) => {
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
                        {<ErrorAlertComponent request={identificationRequest} />}
                        {<ErrorAlertComponent request={authenticationRequest} />}
                        <div className="text-center">
                            {identificationData.isIdentify
                                ? (
                                    <PasswordProcess
                                        processing={helpers.requests.requestLoading(authenticationRequest)}
                                        dispatch={dispatch}
                                        login={login}
                                    />
                                )
                                : (
                                    <LoginProcess
                                        requests={identificationRequest}
                                        dispatch={dispatch}
                                        handleIdentified={handleIdentified}
                                    />
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

// Prop types to ensure destroyed props data type
LoginPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authenticationData: PropTypes.object.isRequired,
    identificationData: PropTypes.object.isRequired,
    identificationRequest: PropTypes.object.isRequired,
    authenticationRequest: PropTypes.object.isRequired,
};

// Map state function to component props
const mapStateToProps = (state) => ({
    identificationData: state.authentication.cores,
    authenticationData: state.authentication.cores,
    identificationRequest: state.identification.requests,
    authenticationRequest: state.authentication.requests,
});

// Map dispatch function to component props
const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action) }
});

// Connect component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);