import React from 'react';
import PropTypes from 'prop-types';

import FormInput from "../../shared/form/FormInput";

const LoginProcessComponent = ({processing}) => {
    return (
        <>
            <FormInput
                inputType="text"
                inputIcon="fas fa-phone"
                inputEnable={!processing}
                handleInput={handleInput}
                inputPlaceholder="Identifiant"
            />
            {processing && <img width={70} alt='loading...' src={require('../assets/images/spinner-dark.svg')} />}
        </>
    )
}

// Prop types to ensure destroyed props data type
LoginProcessComponent.propTypes = {
    processing: PropTypes.bool.isRequired,
};

export default React.memo(LoginProcessComponent);