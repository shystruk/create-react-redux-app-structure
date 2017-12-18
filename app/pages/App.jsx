'use strict';

import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './../store';

import noInternet from 'no-internet';
import isEmpty from 'lodash/isEmpty';

import { pushNotification, removeNotification } from './../actions/notification';

import Alert from './../services/Alert';
import Notification from './../services/Notification';

import Home from './Home/Home';
import About from './About/About';
import Resize_SubPub from './Resize_SubPub/Resize_SubPub';
import Page_Visibility_API from './Page_Visibility_API/Page_Visibility_API';

function mapStateToProps(store, props) {
    return {
        alert: store.alert,
        weather: store.weather,
        weatherCities: store.weatherCities,
        notification: store.notification
    }
}

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        noInternet({callback: (offline) => {
            if (offline && isEmpty(this.props.notification.message)) {
                store.dispatch(pushNotification('You are offline 😎'));
            } else if (!offline && !isEmpty(this.props.notification.message)) {
                store.dispatch(removeNotification());
            }
        }});
    }

    render() {
        let alertStore = this.props.alert;
        let notificationStore = this.props.notification;

        return <div className="app">

            <ul className="app-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resize">Resize_SubPub</Link></li>
                <li><Link to="/visibility">Page_Visibility_API</Link></li>
            </ul>


            <Route exact path="/" render={() => <Home {...this.props} /> } />
            <Route path="/about" render={() => <About {...this.props} /> } />
            <Route path="/visibility" render={() => <Page_Visibility_API {...this.props} /> } />
            <Route path="/resize" component={Resize_SubPub} />

            <Alert alert={alertStore} />

            <Notification notification={notificationStore} />
        </div>
    }
}

export default withRouter(connect(mapStateToProps)(App));
