import {useEffect, useState} from 'react';

import helpers from "../../helpers";
import constants from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/identification/actions";
import {NotificationManager} from "react-notifications";

export const useLoginProcessManager = () => {
    // Local state
    const [phone, setPhone] = useState(constants.generals.DEFAULT_INPUT);

    // Redux
    const dispatch = useDispatch();
    const identificationRequest = useSelector(state => state.identification.requests);

    const identificationRequestFailed = helpers.requests.requestFailed(identificationRequest);
    const identificationRequestProcessing = helpers.requests.requestLoading(identificationRequest);

    // Handle login input
    const handleLoginInput = (data) => {
        // Reset error data
        errorReset();
        // Set password data
        setPhone({...phone, data});
        // Fire when user phone reached 9 characters
        (data.length === 9) && dispatch(actions.middlewares.emitAttemptUserIdentification({login: data}));
    }

    // Error reset
    const errorReset = () => {
        identificationRequestFailed && dispatch(actions.cores.storeAttemptUserIdentificationRequestReset());
    }

   return {handleLoginInput, identificationRequestProcessing}
}