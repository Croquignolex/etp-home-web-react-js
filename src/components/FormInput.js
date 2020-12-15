import React  from 'react';
import PropTypes from 'prop-types';

// Component
function FormInput({label, type, icon, input, handleInput}) {
    // Data
    const {val, message, isValid} = input;

    // Func
    const handleInputChange = (e) => {
        handleInput(true, e.target.value)
    }

    // Render
    return (
        <>
            <small className={'text-danger'}>{!isValid && message}</small>
            <div className="input-group mb-3">
                <input type={type}
                       placeholder={label}
                       value={val ? val : ''}
                       style={getFieldColor(input)}
                       onChange={handleInputChange}
                       className={`form-control ${!isValid && 'is-invalid'}`}
                />
                {/* Icon */}
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className={icon} style={getFieldColor(input)} />
                    </div>
                </div>
            </div>
        </>
    )
}

function getFieldColor(field) {
    return {color: (field.isValid ? '#22252a' : '#e22529')}
}

// Prop types to ensure destroyed props data type
FormInput.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired,
};

export default React.memo(FormInput);