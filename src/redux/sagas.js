import { all } from 'redux-saga/effects';

import user from './user/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([user()]);
}
