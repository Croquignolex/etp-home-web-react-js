import React  from 'react';
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

const DomTitle = ({title}) => {
    return (
        <Helmet><title>{title}</title></Helmet>
    );
};

// Prop types to ensure destroyed props data type
DomTitle.propTypes = {
    title: PropTypes.string.isRequired
};

export default React.memo(DomTitle);