import _lowerCase from 'lodash/lowerCase';

/**
 * @param {Object} weather
 * @return {Object}
 */
export const parseWeatherResponseForUI = function (weather) {
    return {
        location: `${weather.name}, ${weather.sys.country}`,
        flag: _lowerCase(weather.sys.country),
        description: weather.weather[0].description,
        temperature: `${weather.main.temp}°С`,
        wind: `wind ${weather.wind.speed} m/s`,
        clouds: `clouds ${weather.clouds.all} %`
    };
};
