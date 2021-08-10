import {useEffect} from "react";
import {useSelector} from "react-redux";
import {NotificationManager} from "react-notifications";

import helpers from "../../helpers";

export const useLoginPageManager = () => {
    // Redux
    const {identificationRequest, showPasswordProcess, authenticationRequest} = useSelector(state => ({
        identificationRequest: state.identification.requests,
        authenticationRequest: state.authentication.requests,
        showPasswordProcess: state.identification.isIdentify
    }));

    const identificationRequestSucceeded = helpers.requests.requestSucceeded(identificationRequest);

    // Local effects
    useEffect(() => {
        if(identificationRequestSucceeded) {
            NotificationManager.success(identificationRequest.message);
            helpers.sounds.playInfoSound();
        }
        // eslint-disable-next-line
    }, [identificationRequestSucceeded]);

    return {showPasswordProcess, identificationRequest, authenticationRequest};
}