import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'

import sagas from '../redux/sagas';
import reducers from '../redux/reducers';

// Fetch all middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Necessary to apply on DOM interactions
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
        : compose;

// Create global store
const store = createStore(
    combineReducers({...reducers}),
    composeEnhancers(applyMiddleware(...middleware))
);

// Run saga middleware
sagaMiddleware.run(sagas);

export {store};