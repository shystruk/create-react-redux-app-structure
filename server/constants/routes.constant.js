module.exports = {
    WEATHER_BASE_URL: 'https://api.openweathermap.org/data/2.5/',

    /**
     * @param {String} coordinates
     * @return {String}
     */
    GOOGLE_GEOCODE: (coordinates) => {
        return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&sensor=true`;
    }
};
