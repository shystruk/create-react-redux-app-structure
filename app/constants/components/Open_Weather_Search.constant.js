import { URL } from '../request.constant';

export const API_KEY = '21f7dd457b739d8e583a82c904c09054';

/**
 * @param {String} cityName
 * @return {String}
 */
export const GET_URL_FOR_ONE_CITY = function (cityName) {
    return `${URL.WEATHER}q=${cityName}&appid=${API_KEY}&units=metric`;
};

/**
 * @param {String} cityName
 * @return {String}
 */
export const GET_URL_FOR_LIST = function (cityName) {
    return `${URL.WEATHER_LIST}q=${cityName}&type=like&sort=population&cnt=30&appid=${API_KEY}&units=metric`;
};
