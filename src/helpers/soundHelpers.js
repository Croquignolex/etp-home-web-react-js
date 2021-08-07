import UIfx from "uifx";

import mp3InfoFile from "../assets/audio/info.mp3";
import mp3ErrorFile from "../assets/audio/error.mp3";
import mp3WarningFile from "../assets/audio/warning.mp3";

export default {
    // Play error sound
    playErrorSound: () => {
        try {
            const errorSound = new UIfx(mp3ErrorFile, {volume: 1.0, throttleMs: 100});
            errorSound.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    },

    // Play info sound
    playInfoSound: () => {
        try {
            const infoSound = new UIfx(mp3InfoFile, {volume: 1.0, throttleMs: 100});
            infoSound.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    },

    // Play warning sound
    playWarningSound: () => {
        try {
            const warningSound = new UIfx(mp3WarningFile, {volume: 1.0, throttleMs: 100});
            warningSound.play();
        } catch (e) {
            if(process.env.NODE_ENV !== "production") console.log({e})
        }
    }
}
