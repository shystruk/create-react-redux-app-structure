'use strict';

import React, { Component } from 'react';

import Open_Weather_Search from './../../components/Open_Weather_Search/Open_Weather_Search';
import Weather_View from './../../components/dumb/Weather_View';
import Alert from './../../services/Alert';

export default class About extends Component {
    constructor() {
        super();
    }

    render() {
        let alertStore = this.props.alert;
        let weatherStore = this.props.weather;
        let weatherListStore = this.props.weatherCities;

        return <div className="app-about">

            <h1>About</h1>

            <p><em>You are not able to remove weather from the list on this page :)</em></p>

            <Open_Weather_Search weather={weatherStore} />

            <Weather_View weather={weatherStore} weatherList={weatherListStore.weatherList} />

            <Alert alert={alertStore} />

        </div>
    }
}
