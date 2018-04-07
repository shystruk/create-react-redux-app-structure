import { PUSH_WEATHER_LIST, REMOVE_WEATHER_FROM_LIST } from './../actions/weather';

const initialState = {
    weatherList: []
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function weatherListReducer(state = initialState, action) {
    switch (action.type) {
        case PUSH_WEATHER_LIST:
            return {
                ...state,
                weatherList: [
                    ...state.weatherList,
                    action.weather
                ]
            };
        case REMOVE_WEATHER_FROM_LIST:
            return {
                ...state,
                weatherList: [
                    ...state.weatherList.slice(0, action.index),
                    ...state.weatherList.slice(action.index + 1)
                ]
            };
        default:
            return state;
    }
}
