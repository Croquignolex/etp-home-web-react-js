import React from 'react';

import FormInput from "../../shared/form/FormInput";
import FormButton from "../../shared/form/FormButton";
import DisabledFormInput from "../../shared/form/DisabledFormInput";
import {usePasswordProcessManager} from "./usePasswordProcessManager";

function PasswordProcessComponent() {
    // Component Hooks
    const {login, handlePasswordInput, handleAuthentication, authenticationRequestProcessing} = usePasswordProcessManager();

    return (
        <form name="form" onSubmit={handleAuthentication}>
            <div className="mb-3">
                <DisabledFormInput val={login} />
            </div>
            <FormInput
                inputType="password"
                inputIcon="fas fa-lock"
                inputPlaceholder="Mot de passe"
                handleInput={handlePasswordInput}
                inputEnable={!authenticationRequestProcessing}
            />
            <div className="row mt-3">
                <div className="col-6" />
                <FormButton processing={authenticationRequestProcessing} />
            </div>
        </form>
    )
}

// Connect component to Redux
export default React.memo(PasswordProcessComponent);