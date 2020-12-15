import PropTypes from 'prop-types';
import React, {useState} from 'react';

import FormInputComponent from "./FormInputComponent";
import {storeResetErrorData} from "../redux/errors/actions";

// Component
function LoginProcessComponent({dispatch, handleLogin}) {
    // Local state
    const [loader, setLoader] = useState(false);

    // Handle phone input
    const handleInput = (phone) => {
        dispatch(storeResetErrorData());
console.log(phone)
        if(phone.length === 9) {
            setLoader(true);
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
    handleLogin: PropTypes.func.isRequired,
};

export default React.memo(LoginProcessComponent);