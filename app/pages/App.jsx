'use strict';

import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home/Home';
import About from './About/About';
import Resize_SubPub from './Resize_SubPub/Resize_SubPub';
import Page_Visibility_API from './Page_Visibility_API/Page_Visibility_API';

function mapStateToProps(store, props) {
    return {
        alert: store.alert,
        weather: store.weather,
        weatherCities: store.weatherCities
    }
}

class App extends Component {
    constructor() {
        super();
    }

    render() {
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
        </div>
    }
}

export default withRouter(connect(mapStateToProps)(App));
