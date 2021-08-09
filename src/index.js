import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './Router';
import {store} from "./redux/store";
import * as serviceWorker from './serviceWorker';

import './assets/scss/master.scss';

ReactDOM.render(
    // Connect global store to components toward the router
    <Provider store={store}><AppRoutes /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
