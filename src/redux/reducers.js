import user from './user/reducer';
import users from './users/reducer';
import roles from './roles/reducer';
import errors from './errors/reducer';
import requests from './requests/reducer';

// Combine all reducers
export default {
    user,
    users,
    roles,
    errors,
    requests,
};
