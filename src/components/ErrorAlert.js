import React from "react";
import * as UIfx from "uifx";
import PropTypes from "prop-types";
import {Alert} from "react-bootstrap";

import mp3ErrorFile from "../assets/audio/error.mp3";

// Component
function ErrorAlert({message}) {
    // Play sound
    playErrorSound();

    // Render
    return (
        <Alert variant="danger" className='text-center mb-2'>{message}</Alert>
    );
}

// Play error sound
function playErrorSound() {
    try {
        const errorSound = new UIfx(mp3ErrorFile, {volume: 1.0, throttleMs: 100});
        errorSound.play();
    } catch (e) {
        if(process.env.NODE_ENV !== "production") console.log({e})
    }
}

// Prop types to ensure destroyed props data type
ErrorAlert.propTypes = {
    message: PropTypes.string.isRequired
};

// Connect component to Redux
export default React.memo(ErrorAlert);
