import _find from 'lodash/find';
import _includes from 'lodash/includes';

/**
 * @return {Promise}
 */
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            return void navigator.geolocation.getCurrentPosition((position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            }, (error) => {
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        return reject({message: 'User denied the request for Geolocation'});
                    case error.POSITION_UNAVAILABLE:
                        return reject({message: 'Location information is unavailable'});
                    case error.TIMEOUT:
                        return reject({message: 'The request to get user location timed out'});
                    case error.UNKNOWN_ERROR:
                        return reject({message: 'An unknown error occurred'});
                }
            });
        }

        reject({message: 'Geolocation is not supported by this browser'});
    });
};

/**
 * @param {Object} location
 * @return {String}
 */
export const getCityNameFromGeocode = (location) => {
    const address = _find(location.results[0].address_components, (address) => {
        return _includes(address.types, 'locality');
    });

    if (address) {
        switch (address.long_name) {
            case 'Kyiv': 
                return 'Kiev';
            default:
                return address.long_name;
        }
    }

    return 'Kiev';
};
