import PropTypes from 'prop-types';
import React, {useLayoutEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import {requestLoading} from "../functions/requestHelpers";
import {emitAttemptUserAuthentication} from "../redux/user/actions";
import DisabledFormInputComponent from "./DisabledFormInputComponent";

// Component
function PasswordProcessComponent({requests, dispatch, login}) {
    // Local state
    const [password, setPassword] = useState('');

    // local effects
    useLayoutEffect(() => {
        document.title = "Authentification - MMAC";
    }, []);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());
        setPassword(data);
    }

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeResetErrorData());
        dispatch(emitAttemptUserAuthentication({phone: login, password}));
    }

    // Render
    return (
        <form name="form" onSubmit={handleSubmit}>
            <div className="mb-3"><DisabledFormInputComponent val={login} /></div>
            <FormInputComponent inputIcon="fas fa-lock" inputPlaceholder="Mot de passe" inputType="password" inputEnable={!requestLoading(requests)} handleInput={handleInput} />
            <div className="row mt-3">
                <div className="col-6" />
                <FormButtonComponent processing={requestLoading(requests)} />
            </div>
        </form>
    )
}

// Prop types to ensure destroyed props data type
PasswordProcessComponent.propTypes = {
    login: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired
};

export default React.memo(PasswordProcessComponent);