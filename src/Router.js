import React, {Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import constants from './constants';

import './assets/scss/loader.scss';
import PageLoaderComponent from "./sharedComponents/PageLoaderComponent";

// Component
const AppRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <Suspense fallback={<PageLoaderComponent />}>
                <Switch>
                    <Route exact path="/" component={constants.lazyLoadings.LOGIN_PAGE} />
                    <Route component={constants.lazyLoadings.NOT_FOUND_PAGE} />
                </Switch>
            </Suspense>
        </ConnectedRouter>
    );
}

export default React.memo(AppRoutes);
