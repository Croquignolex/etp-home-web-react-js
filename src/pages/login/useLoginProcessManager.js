import helpers from "../../helpers";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/identification/actions";

export const useLoginProcessManager = () => {
    // Redux
    const dispatch = useDispatch();
    const identificationRequest = useSelector(state => state.identification.requests);

    const identificationRequestFailed = helpers.requests.requestFailed(identificationRequest);
    const identificationRequestProcessing = helpers.requests.requestLoading(identificationRequest);

    // Handle login input
    const handleLoginInput = (data) => {
        // Reset error data
        errorReset();
        // Fire when user phone reached 9 characters
        (data.length === 9) && dispatch(actions.middlewares.emitAttemptUserIdentification({login: data}));
    }

    // Error reset
    const errorReset = () => {
        identificationRequestFailed && dispatch(actions.cores.storeAttemptUserIdentificationRequestReset());
    }

   return {handleLoginInput, identificationRequestProcessing}
}