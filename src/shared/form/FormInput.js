import React  from 'react';
import PropTypes from 'prop-types';

const FormInput = ({inputIcon, inputType, inputPlaceholder, inputEnable, handleInput}) => {
    return (
        <div className="input-group">
            <input autoFocus
                   type={inputType}
                   disabled={!inputEnable}
                   className="form-control"
                   placeholder={inputPlaceholder}
                   onChange={(e) => handleInput(e.target.value)}
            />
            {/* Icon */}
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className={inputIcon} />
                </div>
            </div>
        </div>
    )
}

// Prop types to ensure destroyed props data type
FormInput.propTypes = {
    inputIcon: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputEnable: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired,
    inputPlaceholder: PropTypes.string.isRequired
};

export default React.memo(FormInput);