import React from 'react';
import { FormattedMessage } from 'react-intl';

import Open_Weather_Search from './../../components/Open_Weather_Search/Open_Weather_Search';
import Weather_View from './../../components/dumb/Weather_View';

export default class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        let weatherStore = this.props.weather;
        let weatherListStore = this.props.weatherCities;

        return (
            <div className="app-about">

                <h1><FormattedMessage id="pages.about"/></h1>

                <p><em>You are not able to remove weather from the list on this page :)</em></p>

                <Open_Weather_Search weather={weatherStore} />

                <Weather_View weather={weatherStore} weatherList={weatherListStore.weatherList} />
            </div>
        )
    }
}
