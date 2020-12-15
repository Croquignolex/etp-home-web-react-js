import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import {emitAttemptUserIdentification} from "../redux/user/actions";

// Component
function LoginProcessComponent({requests, dispatch, handleIdentified}) {
    // Local state
    const [phone, setPhone] = useState('');

    // local effects
    useEffect(() => {
        // Identified user if phone number check is successful
        if(requestSucceeded(requests)) {
            handleIdentified(true, phone)
        }
    }, [requests]);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());

        if(data.length === 9) {
            setPhone(data);
            dispatch(emitAttemptUserIdentification({data}));
        }
    }

    // Render
    return (
        <>
            <FormInputComponent inputType="text" inputEnable={!requestLoading(requests)} handleInput={handleInput} />
            {requestLoading(requests) && <img width={70} alt='loading...' src={require('../assets/images/spinner-theme.svg')} />}
        </>
    )
}

// Check if request has succeeded
function requestSucceeded(requests) {
    const {failed, loading, succeeded} = requests
    return succeeded && !failed && !loading;
}

// Check if request has failed
function requestFailed(requests) {
    const {failed, loading, succeeded} = requests
    return !succeeded && failed && !loading;
}

// Check if request is in loading
function requestLoading(requests) {
    const {failed, loading, succeeded} = requests
    return !succeeded && !failed && loading;
}

// Prop types to ensure destroyed props data type
LoginProcessComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleIdentified: PropTypes.func.isRequired,
};

export default React.memo(LoginProcessComponent);