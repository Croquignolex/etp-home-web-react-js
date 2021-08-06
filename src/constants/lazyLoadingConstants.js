import {lazy} from "react";

export default {
    // Pages
    LOGIN_PAGE: lazy(() => import('../pages/LoginPage')),
    NOT_FOUND_PAGE: lazy(() => import('../pages/NotFoundPage'))
};