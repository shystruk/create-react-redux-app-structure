import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import _find from 'lodash/find';
import DOMReady from './helpers/domReady';
DOMReady();

import App from './pages/App';

// Localization
import messages from './i18n/messages';
import { addLocaleData, IntlProvider } from 'react-intl'; 
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
addLocaleData([...en, ...es, ...fr]);

let locale = _find(['en', 'es', 'fr'], (locale) => {
    return app.locale.indexOf(locale) !== -1;
});


ReactDom.render(
    <Provider store={store}>
        <IntlProvider locale={app.locale} messages={messages[locale]}>
            <Router>
                <App/>
            </Router>
        </IntlProvider>
    </Provider>,

    document.getElementById('app')
);
