import authenticationCores from './authentication/reducers/cores';
import identificationCores from './identification/reducers/cores';
import authenticationRequests from './authentication/reducers/requests';
import identificationRequests from './identification/reducers/requests';

// Combine all reducers
export default {
    identificationCores,
    authenticationCores,
    authenticationRequests,
    identificationRequests
};