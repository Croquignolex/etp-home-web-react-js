import React, {useState} from 'react';

import constants from "../../constants";
import actions from "../../redux/identification/actions";

export const useLoginProcessManager = () => {
    // Local state
    const [phone, setPhone] = useState(constants.generals.DEFAULT_INPUT);

    // local effects
    /*useEffect(() => {
        // Identified user if phone number check is successful
        if(requestSucceeded(requests)) {
            handleIdentified(true, phone)
        }
        // eslint-disable-next-line
    }, [requests]);*/

    // Handle login input
    const handleLoginInput = (data) => {
        // Reset error data
        dispatch(actions.requests.storeAttemptUserIdentificationRequestReset());
        // Set password data
        setPhone({...phone, data});
        // Fire when user phone reached 9 characters
        (data.length === 9) && dispatch(actions.middlewares.emitAttemptUserIdentification({phone: data}));
    }

   return {handleLoginInput}
}