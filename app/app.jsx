'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import DOMReady from './helpers/domReady';
DOMReady();

// Localization
import messages from './i18n/messages';
import { addLocaleData, IntlProvider } from 'react-intl'; 
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

addLocaleData([...en, ...es, ...fr]);

import App from './pages/App';

/* staging-code */
window.store = store;
/* end-staging-code */

ReactDom.render(
    <Provider store={store}>
        <IntlProvider locale={app.locale} messages={messages[app.locale]}>
            <Router>
                <App/>
            </Router>
        </IntlProvider>
    </Provider>,

    document.getElementById('app')
);
