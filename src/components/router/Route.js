import React from "react";
import PropTypes from "prop-types"

const Route = ({ path, component: Component }, { location }) => {
    const pathName = location.pathname;

    if (pathName.match(path)) {
        return <Component />
    } else {
        return null
    }
};

Route.contextTypes = {
    location: PropTypes.object
};

export default Route;
