import { GET_URL_FOR_ONE_CITY, GET_URL_FOR_LIST } from '../constants/components/Open_Weather_Search.constant';
import ajax from './../resources/ajax';

/**
 * @param {String} cityName
 * @param {Boolean=} isCityList
 * @return {Promise}
 */
export const getWeatherData = function (cityName, isCityList) {
    let URL = isCityList ? GET_URL_FOR_LIST(cityName) : GET_URL_FOR_ONE_CITY(cityName);

    return ajax('GET', URL, void 0, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
