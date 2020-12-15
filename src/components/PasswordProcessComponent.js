import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import FormButtonComponent from "./FormButtonComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import DisabledFormInputComponent from "./DisabledFormInputComponent";
import {requestLoading, requestSucceeded} from "../functions/defaultFunctions";

// Component
function PasswordProcessComponent({requests, dispatch, login}) {
    // Local state
    const [password, setPassword] = useState('');

    // local effects
    useEffect(() => {
        // Identified user if phone number check is successful
        if(requestSucceeded(requests)) {
            // Redirect to correct app
        }
    }, [requests]);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());
        setPassword(data);
    }

    // dispatch(emitAttemptUserAuthentication({phone: login, password: data}));

    // Render
    return (
        <form name="form">
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