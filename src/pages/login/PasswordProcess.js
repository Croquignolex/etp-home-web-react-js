import PropTypes from 'prop-types';
import React, {useLayoutEffect} from 'react';

import FormInput from "../../shared/form/FormInput";
import FormButton from "../../shared/form/FormButton";
import DisabledFormInput from "../../shared/form/DisabledFormInput";
import {PasswordProcessManager} from "./PasswordProcessManager";

function PasswordProcessComponent({processing, dispatch, login}) {
    // Component manager data
    const {handlePasswordInput, handleAuthentication} = PasswordProcessManager({dispatch, login});

    // local effects
    useLayoutEffect(() => {
        document.title = "Authentification - MMAC";
    }, []);

    // Render
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
    login: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    processing: PropTypes.bool.isRequired
};

export default React.memo(PasswordProcessComponent);