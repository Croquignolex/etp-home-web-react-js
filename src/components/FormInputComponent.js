import React  from 'react';
import PropTypes from 'prop-types';

// Component
function FormInputComponent({inputType, inputPlaceholder, inputEnable, handleInput}) {

    // Handle input change
    const handleInputChange = (e) => {
        handleInput(e.target.value)
    }

    // Render
    return (
        <>
            <div className="input-group">
                <input type={inputType}
                       disabled={!inputEnable}
                       className="form-control"
                       onChange={handleInputChange}
                       placeholder={inputPlaceholder}
                />
                {/* Icon */}
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-phone" />
                    </div>
                </div>
            </div>
        </>
    )
}

// Prop types to ensure destroyed props data type
FormInputComponent.propTypes = {
    inputType: PropTypes.string.isRequired,
    inputEnable: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired,
    inputPlaceholder: PropTypes.string.isRequired
};

export default React.memo(FormInputComponent);