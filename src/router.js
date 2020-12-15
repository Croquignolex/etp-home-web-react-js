import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import asyncComponent from './components/asyncComponent';

// Component
function AppRoutes({history}) {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                {/* Available pages on guest mode */}
                <Route
                    exact
                    path="/"
                    component={asyncComponent(() => import('./containers/LoginContainer'))}
                />
                {/* 404 page */}
                <Route component={asyncComponent(() => import('./pages/NotFoundPage'))} />
            </Switch>
        </ConnectedRouter>
    );
}

export default React.memo(AppRoutes);
