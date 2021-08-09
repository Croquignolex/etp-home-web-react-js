import React from 'react';
import PropTypes from 'prop-types';

import FormInput from "../../shared/form/FormInput";
import FormButton from "../../shared/form/FormButton";
import DisabledFormInput from "../../shared/form/DisabledFormInput";
import {usePasswordProcessManager} from "./usePasswordProcessManager";

function PasswordProcessComponent({processing}) {
    // Component Hooks
    const {handlePasswordInput, handleAuthentication} = usePasswordProcessManager();

    return (
        <form name="form" onSubmit={handleAuthentication}>
            <div className="mb-3">
                <DisabledFormInput val={login} />
            </div>
            <FormInput
                inputType="password"
                inputIcon="fas fa-lock"
                inputEnable={!processing}
                inputPlaceholder="Mot de passe"
                handleInput={handlePasswordInput}
            />
            <div className="row mt-3">
                <div className="col-6" />
                <FormButton processing={processing} />
            </div>
        </form>
    )
}

// Prop types to ensure destroyed props data type
PasswordProcessComponent.propTypes = {
    processing: PropTypes.bool.isRequired
};

// Connect component to Redux
export default React.memo(PasswordProcessComponent);