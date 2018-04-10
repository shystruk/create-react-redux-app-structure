import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import { FLAG_IMAGE_URL } from '../../constants/components/Weather_View.constant';
import { scrollTo } from '../../helpers/uiActions';

export default class Weather_View extends React.Component {

    /**
     * @param {Object} weather
     * @return {XML}
     */
    static weatherTemplate(weather) {
        return <div>
            <div>
                <strong>{weather.location} </strong>
                <img src={FLAG_IMAGE_URL + weather.flag + '.png'} />
                <span> {weather.description}</span>
            </div>
            <div>
                <strong>{weather.temperature}, </strong>
                <span>{weather.wind}, </span>
                <span>{weather.clouds}</span>
            </div>
        </div>;
    }

    render() {
        let oneCity = '';
        let weather = this.props.weather;
        let weatherList = this.props.weatherList;

        if (!_isEmpty(weather.data)) {
            oneCity = <li>{Weather_View.weatherTemplate(weather.data)}</li>;
        }

        return (
            <div className="app-weather-view">
                <ul>
                    {oneCity}

                    {weatherList.reverse().map((weather, index) => {
                        return <li key={index} onClick={scrollTo.bind(this, '.app-open-weather-search', void 0)}>

                            {Weather_View.weatherTemplate(weather)}

                            <button onClick={this.props.remove ? this.props.remove.bind(this, index) : app.noop}
                                    className="app-weather-view-remove" disabled={!this.props.remove}>
                                x
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}
