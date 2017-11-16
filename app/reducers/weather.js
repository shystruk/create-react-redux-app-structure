'use strict';

import { PUSH_WEATHER } from './../actions/weather';

const initialState = {
    weather: {}
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
                ...{...action.weather}
            };
        default:
            return state;
    }
}
