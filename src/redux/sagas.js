import { all } from 'redux-saga/effects';

import authentication from './authentication/saga';
import identification from './identification/saga';

// Combine all saga middleware
export default function* sagas() {
    yield all([
        authentication(),
        identification()
    ]);
}
