import { all } from 'redux-saga/effects';

import user from './user/saga';
import roles from './roles/saga';
import users from './users/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([
        user(),
        users(),
        roles(),
    ]);
}
