import {lazy} from "react";

export default {
    // Pages
    NOT_FOUND_PAGE: lazy(() => import('../pages/NotFoundPage')),
    LOGIN_PAGE: lazy(() => import('../containers/LoginContainer'))
};