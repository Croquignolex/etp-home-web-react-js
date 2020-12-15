import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";
import {emitAttemptUserIdentification} from "../redux/user/actions";

// Component
function LoginProcessComponent({requests, dispatch, handleIdentified}) {
    // Local state
    const [phone, setPhone] = useState('');
    const [loader, setLoader] = useState(false);

    // local effects
    useEffect(() => {
        // Identified user if phone number check is successful
        if(requests.succeeded) {
            handleIdentified(true, phone)
        }
    }, [requests.succeeded]);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());

        if(data.length === 9) {
            setPhone(data);
            setLoader(true);
            dispatch(emitAttemptUserIdentification({data}));
        }
    }

    // Render
    return (
        <>
            <FormInputComponent inputType="text" inputEnable={!loader} handleInput={handleInput} />
            {loader && <img width={70} alt='loading...' src={require('../assets/images/spinner-theme.svg')} />}
        </>
    )
}

// Prop types to ensure destroyed props data type
LoginProcessComponent.propTypes = {
    dispatch: PropTypes.func.isRequired,
    requests: PropTypes.object.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleIdentified: PropTypes.func.isRequired,
};

export default React.memo(LoginProcessComponent);