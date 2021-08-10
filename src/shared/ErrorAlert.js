import React from "react";
import PropTypes from "prop-types";
import {Alert} from "react-bootstrap";

import helpers from "../helpers"

const ErrorAlert = ({request}) => {
    const canShow = helpers.requests.requestFailed(request);

    // Play sound
    canShow && helpers.sounds.playDangerSound();

    return (
        canShow && <Alert variant="danger" className='text-center mb-2'>{request.message}</Alert>
    );
}

// Prop types to ensure destroyed props data type
ErrorAlert.propTypes = {
    request: PropTypes.object.isRequired
};

export default React.memo(ErrorAlert);
