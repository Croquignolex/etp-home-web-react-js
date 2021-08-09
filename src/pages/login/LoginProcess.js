import React from 'react';
import PropTypes from 'prop-types';

import FormInput from "../../shared/form/FormInput";
import {useLoginProcessManager} from "./useLoginProcessManager";

const LoginProcessComponent = ({processing}) => {
    // Component Hooks
    const {handleLoginInput} = useLoginProcessManager();

    return (
        <>
            <FormInput
                inputType="text"
                inputIcon="fas fa-phone"
                inputEnable={!processing}
                inputPlaceholder="Identifiant"
                handleInput={handleLoginInput}
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