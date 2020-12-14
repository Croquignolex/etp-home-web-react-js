import UIfx from "uifx";
import {WARNING} from "../../helpers/constants";
import mp3WarningFile from "../../assets/audio/warning.mp3";
import {
    STORE_RESET_TOAST,
    STORE_SET_WARNING_TOAST_DATA,
} from "./actions";

// Sounds
const warningSound = new UIfx(mp3WarningFile, {volume: 1.0, throttleMs: 100});

// Partial global store for error data management
const initialState = {
    delay: 0,
    icon: '',
    body: '',
    title: '',
    sound: {},
    show: false,
    headerClass: '',
};

// Reduce
function reduce(state = initialState, action) {
    let nextState;
    switch (action.type) {
        // Resolve event to reset toast store data
        case STORE_RESET_TOAST:
            nextState = {...state, ...initialState};
            return nextState || state;
        // Resolve event to set warning toast store data
        case STORE_SET_WARNING_TOAST_DATA:
            nextState = {...state,
                show: true,
                delay: 8000,
                type: WARNING,
                body: action.body,
                title: action.title,
                sound: warningSound,
                headerClass: 'bg-warning',
                icon: 'fa fa-exclamation-circle',
            };
            return nextState || state;
        // Unknown action
        default: return state;
    }
}

export default reduce