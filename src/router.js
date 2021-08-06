import React, {lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import './assets/scss/loader.scss';
import PageLoaderComponent from "./components/PageLoaderComponent";

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const LoginPage = lazy(() => import('./containers/LoginContainer'));

// Component
const AppRoutes = ({history}) => {
    return (
        <ConnectedRouter history={history}>
            <Suspense  fallback={<PageLoaderComponent />}>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
        </ConnectedRouter>
    );
}

export default React.memo(AppRoutes);
