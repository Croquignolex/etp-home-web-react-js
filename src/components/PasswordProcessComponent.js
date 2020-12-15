import PropTypes from 'prop-types';
import React, {useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";

// Component
function PasswordProcessComponent({dispatch, login}) {
    // Local state
    const [loader, setLoader] = useState(false);
    const [password, setPassword] = useState('');

    // Handle phone input
    const handleInput = (password) => {
        dispatch(storeResetErrorData());
        setPassword(password);
    }

    // Render
    return (
        <form name="form">
            <FormInputComponent inputType="password" inputEnable={!loader} handleInput={handleInput} />
            {loader && <img width={70} alt='loading...' src={require('../assets/images/spinner-theme.svg')} />}
        </form>
    )
}

// Prop types to ensure destroyed props data type
PasswordProcessComponent.propTypes = {
    login: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default React.memo(PasswordProcessComponent);