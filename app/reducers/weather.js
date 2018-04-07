import { PUSH_WEATHER, REQUEST_WEATHER, RECEIVE_WEATHER } from './../actions/weather';

const initialState = {
    weather: {
        data: {},
        loaded: false
    }
};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case PUSH_WEATHER:
            return {
                ...state,
                data: {
                    ...{...action.weather}
                }
            };
        case REQUEST_WEATHER:
            return {
                ...state,
                loaded: false
            };
        case RECEIVE_WEATHER:
            return {
                ...state,
                loaded: true
            };
        default:
            return state;
    }
}
