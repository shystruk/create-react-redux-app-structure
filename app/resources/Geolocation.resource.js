import ajax from './../resources/ajax';
import { URL } from './../constants/request.constant';

/**
 * @param {String} coordinates
 * @return {Promise}
 */
export const getGeoLocation = function (coordinates) {
    return ajax('GET', `${URL.LOCATION}${coordinates}`, void 0, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
