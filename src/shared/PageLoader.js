import React  from 'react';

import './assets/scss/loader.scss';

const PageLoader = () => {
    return (
        <div className="lds-ripple"><div/><div/></div>
    );
};

export default React.memo(PageLoader);