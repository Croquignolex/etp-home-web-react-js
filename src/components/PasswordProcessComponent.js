import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import {emitAttemptUserAuthentication} from "../redux/user/actions";
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

        if(data.length === 9) {
            setPassword(data);
            dispatch(emitAttemptUserAuthentication({phone: login, password: data}));
        }
    }

    // Render
    return (
        <form name="form">
            <FormInputComponent inputPlaceholder="Mot de passe" inputType="password" inputEnable={!requestLoading(requests)} handleInput={handleInput} />
            {requestLoading(requests) && <img width={70} alt='loading...' src={require('../assets/images/spinner-theme.svg')} />}
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