import PropTypes from 'prop-types';
import React, {useEffect, useLayoutEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import {emitAttemptUserIdentification} from "../redux/user/actions";
import {requestLoading, requestSucceeded} from "../functions/requestHelpers";

// Component
function LoginProcessComponent({requests, dispatch, handleIdentified}) {
    // Local state
    const [phone, setPhone] = useState('');

    // local effects
    useLayoutEffect(() => {
        document.title = "Identification - MMAC";
    }, []);

    // local effects
    useEffect(() => {
        // Identified user if phone number check is successful
        if(requestSucceeded(requests)) {
            handleIdentified(true, phone)
        }
        // eslint-disable-next-line
    }, [requests]);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());

        if(data.length === 9) {
            setPhone(data);
            dispatch(emitAttemptUserIdentification({phone: data}));
        }
    }

    // Render
    return (
        <>
            <FormInputComponent inputIcon="fas fa-phone" inputPlaceholder="Identifiant" inputType="text" inputEnable={!requestLoading(requests)} handleInput={handleInput} />
            {requestLoading(requests) && <img width={70} alt='loading...' src={require('../assets/images/spinner-dark.svg')} />}
        </>
    )
}

// Prop types to ensure destroyed props data type
LoginProcessComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired,
    handleIdentified: PropTypes.func.isRequired,
};

export default React.memo(LoginProcessComponent);