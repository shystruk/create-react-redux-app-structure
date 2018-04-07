export const PUSH_WEATHER_LIST = 'PUSH_WEATHER_LIST';
export const REMOVE_WEATHER_FROM_LIST = 'REMOVE_WEATHER_FROM_LIST';

/**
 * @param {Object} weather
 * @return {Object}
 */
export function pushWeatherList(weather) {
    return {
        type: PUSH_WEATHER_LIST,
        weather
    };
}

/**
 * @param {Number} index
 * @return {Object}
 */
export function removeWeatherFromList(index) {
    return {
        type: REMOVE_WEATHER_FROM_LIST,
        index
    };
}
