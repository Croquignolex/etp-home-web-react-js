import React  from 'react';
import PropTypes from 'prop-types';

import helpers from "../../helpers";
import constants from "../../constants";

const FormInput = ({input, inputIcon, inputType, inputPlaceholder, inputEnable, handleInput}) => {
    const {isValid, errorMessage} = input;
    const inputClass = `form-control ${!isValid && 'is-invalid'}`;
    const iconClass = `${inputIcon} ${!isValid && 'text-danger'}`;

    // Play sound
    !isValid && helpers.sounds.playWarningSound();

    return (
        <div className="text-left">
            <div className="input-group">
                <input autoFocus
                       type={inputType}
                       className={inputClass}
                       disabled={!inputEnable}
                       placeholder={inputPlaceholder}
                       onChange={(e) => handleInput(e.target.value)}
                />
                {/* Icon */}
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={iconClass} />
                    </div>
                </div>
            </div>
            {!isValid && <small className="text-danger">{errorMessage}</small>}
        </div>


    )
}

// Prop types to ensure destroyed props data type
FormInput.propTypes = {
    input: PropTypes.object,
    inputIcon: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputEnable: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired,
    inputPlaceholder: PropTypes.string.isRequired
};

// Prop types to ensure destroyed props data type
FormInput.defaultProps = {
    input: constants.generals.DEFAULT_INPUT
};

export default React.memo(FormInput);