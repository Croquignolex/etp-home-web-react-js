import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import helpers from "../../helpers";
import LoginProcess from "./LoginProcess";
import DomTitle from "../../shared/DomTitle";
import PasswordProcess from "./PasswordProcess";
import {useLoginManager} from "./useLoginManager";
import ErrorAlertComponent from "../../shared/ErrorAlert";

const LoginPage = ({authenticationData, identificationData, identificationRequest, authenticationRequest, dispatch}) => {
    // Component custom hooks
    const {login} = useLoginManager();

    const identificationRequestProcessing = helpers.requests.requestLoading(identificationRequest);
    const authenticationRequestProcessing = helpers.requests.requestLoading(authenticationRequest);

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
                                    <>
                                        <DomTitle title={"Authentification - MMAC"} />
                                        <PasswordProcess processing={authenticationRequestProcessing} />
                                    </>
                                )
                                : (
                                    <div>
                                        <DomTitle title={"Identification - MMAC"} />
                                        <LoginProcess processing={identificationRequestProcessing} />
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