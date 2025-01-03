import React, {Suspense} from 'react';
import {NotificationContainer} from "react-notifications";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import constants from './constants';
import PageLoader from "./shared/PageLoader";

// Component
const AppRoutes = () => {
    return (
        <Router>
            <NotificationContainer />
            <Suspense fallback={<PageLoader />}>
                <Switch>
                    <Route exact path="/" component={constants.lazyLoadings.LOGIN_PAGE} />
                    <Route component={constants.lazyLoadings.NOT_FOUND_PAGE} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default React.memo(AppRoutes);
