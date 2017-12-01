'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import DOMReady from './helpers/domReady';
DOMReady();

import App from './pages/App';

/* staging-code */
window.store = store;
/* end-staging-code */

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,

    document.getElementById('app')
);
