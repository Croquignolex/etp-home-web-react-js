import PropTypes from 'prop-types';
import React, {useLayoutEffect} from 'react';

import FormButton from "../../shared/form/FormButton";
import DisabledFormInput from "../../shared/form/DisabledFormInput";
import FormInput from "../../shared/form/FormInput";

function PasswordProcessComponent({processing, dispatch, login}) {
    // local effects
    useLayoutEffect(() => {
        document.title = "Authentification - MMAC";
    }, []);

    // Render
    return (
        <form name="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <DisabledFormInput val={login} />
            </div>
            <FormInput
                inputType="password"
                inputIcon="fas fa-lock"
                inputPlaceholder="Mot de passe"
                inputEnable={!processing}
                handleInput={handleInput}
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