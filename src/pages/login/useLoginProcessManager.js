import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import helpers from "../../helpers";
import constants from "../../constants";
import actions from "../../redux/authentication/actions";

export const useLoginProcessManager = () => {
    // Local state
    const [phone, setPhone] = useState(constants.generals.DEFAULT_INPUT);

    // local effects
    useEffect(() => {
        // Identified user if phone number check is successful
        if(requestSucceeded(requests)) {
            handleIdentified(true, phone)
        }
        // eslint-disable-next-line
    }, [requests]);

    // Handle phone input
    const handleInput = (data) => {
        dispatch(storeResetErrorData());

        if(data.length === 9) {
            setPhone(data);
            dispatch(emitAttemptUserIdentification({phone: data}));
        }
    }

   return {handlePasswordInput, handleAuthentication}
}