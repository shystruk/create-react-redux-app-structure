import { getWeatherData } from './../resources/Open_Weather.resource';
import { parseWeatherResponseForUI } from './../components/Open_Weather_Search/Open_Weather_Search.utils';

export const PUSH_WEATHER = 'PUSH_WEATHER';
export const PUSH_WEATHER_LIST = 'PUSH_WEATHER_LIST';
export const REMOVE_WEATHER_FROM_LIST = 'REMOVE_WEATHER_FROM_LIST';
export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

/**
 * @param {Object} weather
 * @return {Object}
 */
export function pushWeather(weather) {
    return {
        type: PUSH_WEATHER,
        weather
    };
}

/**
 * @return {Object}
 */
export function requestWeather() {
    return {
        type: REQUEST_WEATHER
    };
}

/**
 * @return {Object}
 */
export function receiveWeather() {
    return {
        type: RECEIVE_WEATHER
    };
}

/**
 * @param {String} cityName
 * @return {Promise}
 */
export const fetchWeather = (cityName) => (dispatch) => {
    dispatch(requestWeather());

    return getWeatherData(cityName)
        .then((weather) => {
            dispatch(pushWeather(parseWeatherResponseForUI(weather)));
        })
        .finally(() => {
            dispatch(receiveWeather());
        });
};
