import React from 'react';
import store from './../../store';
import { pushWeather, fetchWeather } from './../../actions/weather';
import { pushWeatherList } from './../../actions/weather_list';
import { showAlert } from './../../actions/alert';
import { getWeatherData } from './../../resources/Open_Weather.resource';
import { getGeoLocation } from './../../resources/Geolocation.resource';
import { Open_Weather_Interface } from './../../helpers/interfaces';
import { getLocation, getCityNameFromGeocode } from './../../helpers/geolocation';
import { parseWeatherResponseForUI } from './Open_Weather_Search.utils';
import { KEY_CODES } from './../../constants/keyCodes.constant';
import { ERROR_MESSAGES } from './../../constants/request.constant';

export default class Open_Weather extends React.Component {
    constructor() {
        super();

        this.state = Open_Weather_Interface;

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        if (!this.props.weather.loaded) {
            this.setState(() => ({preload: true}));

            getLocation()
                .then(position => {
                    return getGeoLocation(`${position.latitude},${position.longitude}`);
                })
                .then(location => {
                    return store.dispatch(fetchWeather(getCityNameFromGeocode(location)));
                })
                .catch(error => {
                    store.dispatch(showAlert((error && error.message) || ERROR_MESSAGES.GEO_LOCATION_UNAVAILABLE));
                })
                .finally(() => {
                    this.setState(() => ({preload: false}));
                });
        }
    }

    /**
     * @param {Object} event
     */
    handleKeyUp(event) {
        if (event.keyCode === KEY_CODES.ENTER) {
            this.handleSearch();
        }
    }

    /**
     * @param {Object} event
     */
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState(() => ({[target.name]: value}));
    }

    async handleSearch() {
        let weather = {};

        this.setState(() => ({preload: true}));

        try {
            weather = await getWeatherData(this.state.cityName, this.state.isCityList);

            Open_Weather.addWeatherToStore(weather);

        } catch(error) {
            // do not handle Weather API 'find' endpoint error :)
            if (!this.state.isCityList) {
                store.dispatch(showAlert(error.message));
            }
        } finally {
            this.setState(() => ({preload: false}));
        }
    }

    /**
     * @param {Object} weather
     */
    static addWeatherToStore(weather) {
        if (weather.list) {
            for (let item of weather.list) {
                store.dispatch(pushWeatherList(parseWeatherResponseForUI(item)));
            }
        } else {
            store.dispatch(pushWeather(parseWeatherResponseForUI(weather)));
        }
    }

    render() {
        return (
            <div className="app-open-weather-search">

                <h3>Current weather in your city</h3>

                <input type="text" name="cityName" placeholder="Your city name" value={this.state.cityName}
                       onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                <label>
                    <input type="checkbox" name="isCityList" value={this.state.isCityList} onChange={this.handleChange}/>
                    <span>List of cities</span>
                </label>

                <button onClick={this.handleSearch} type="button">Search</button>

                <img className={"app-preload " + (this.state.preload ? 'displayBlock' : 'displayNone')}
                     src="./images/loader.gif"/>

            </div>
        )
    }
}
