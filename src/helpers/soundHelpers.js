import UIfx from "uifx";

import dangerAudio from "../assets/audio/danger.wav";
import successAudio from "../assets/audio/sucess.wav";
import warningAudio from "../assets/audio/warning.wav";

export default {
    // Play danger sound
    playDangerSound: () => {
        try {
            const audio = new UIfx(dangerAudio, {volume: 1.0, throttleMs: 100});
            audio.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    },

    // Play warning sound
    playWarningSound: () => {
        try {
            const audio = new UIfx(warningAudio, {volume: 1.0, throttleMs: 100});
            audio.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    },

    // Play success sound
    playSuccessSound: () => {
        try {
            const audio = new UIfx(successAudio, {volume: 1.0, throttleMs: 100});
            audio.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    }
}
