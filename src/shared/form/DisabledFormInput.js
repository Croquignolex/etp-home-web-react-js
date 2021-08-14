import React  from 'react';
import PropTypes from 'prop-types';

const DisabledFormInput = ({val}) => {
    return (
        <div className="input-group">
            <input disabled value={val} type="text" className="form-control" />
            {/* Icon */}
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-phone" />
                </div>
            </div>
        </div>
    );
};

// Prop types to ensure destroyed props data type
DisabledFormInput.propTypes = {
    val: PropTypes.string.isRequired,
};

export default React.memo(DisabledFormInput);