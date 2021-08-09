import React from 'react';

import FormInput from "../../shared/form/FormInput";
import {useLoginProcessManager} from "./useLoginProcessManager";

const LoginProcessComponent = () => {
    // Component Hooks
    const {handleLoginInput, identificationRequestProcessing} = useLoginProcessManager();

    return (
        <>
            <FormInput
                inputType="text"
                inputIcon="fas fa-phone"
                inputPlaceholder="Identifiant"
                handleInput={handleLoginInput}
                inputEnable={!identificationRequestProcessing}
            />
            {identificationRequestProcessing && <img width={70} alt='loading...' src={require('../../assets/images/spinner-dark.svg')} />}
        </>
    )
}

export default React.memo(LoginProcessComponent);