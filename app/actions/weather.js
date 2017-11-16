'use strict';

export const PUSH_WEATHER = 'PUSH_WEATHER';
export const PUSH_WEATHER_LIST = 'PUSH_WEATHER_LIST';
export const REMOVE_WEATHER_FROM_LIST = 'REMOVE_WEATHER_FROM_LIST';

/**
 * @param {Object} weather
 * @return {Object}
 */
export function pushWeather(weather) {
    return {
        type: PUSH_WEATHER,
        weather
    }
}
