import React, {useState} from 'react';

import helpers from "../../helpers";
import constants from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/identification/actions";

export const useLoginProcessManager = () => {
    // Local state
    const [phone, setPhone] = useState(constants.generals.DEFAULT_INPUT);

    // Redux
    const dispatch = useDispatch();
    const identificationRequestProcessing = useSelector(state => helpers.requests.requestLoading(state.identification.requests));

    // Handle login input
    const handleLoginInput = (data) => {
        // Reset error data
        dispatch(actions.requests.storeAttemptUserIdentificationRequestReset());
        // Set password data
        setPhone({...phone, data});
        // Fire when user phone reached 9 characters
        (data.length === 9) && dispatch(actions.middlewares.emitAttemptUserIdentification({login: data}));
    }

   return {handleLoginInput, identificationRequestProcessing}
}