import React  from 'react';
import PropTypes from 'prop-types';

// Component
function FormInput({inputEnable, handleInput}) {

    // Handle input change
    const handleInputChange = (e) => {
        handleInput(e.target.value)
    }

    // Render
    return (
        <>
            <div className="input-group">
                <input type="text"
                       placeholder="Login"
                       disabled={!inputEnable}
                       className="form-control"
                       onChange={handleInputChange}
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
FormInput.propTypes = {
    inputEnable: PropTypes.bool.isRequired,
    handleInput: PropTypes.func.isRequired
};

export default React.memo(FormInput);