import React, { Component } from "react";
import { createBrowserHistory } from 'history';
import PropTypes from "prop-types"
const history = createBrowserHistory();

class Router extends Component {
    static childContextTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
    };

    constructor(props) {
        super(props);

        this.history = history;
        this.history.listen(() => this.forceUpdate());
    }

    getChildContext() {
        return {
            history: this.history,
            location: window.location,
        };
    }

    render() {
        return this.props.children;
    }
}

export default Router;
