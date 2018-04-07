import { SHOW_ALERT, HIDE_ALERT } from './../actions/alert';

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                message: action.message
            };
        case HIDE_ALERT:
            return {
                ...state,
                message: ''
            };
        default:
            return state;
    }
}
