import { SHOW_NOTIFICATION, REMOVE_NOTIFICATION } from './../actions/notification';

const initialState = {};

/**
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                message: action.message
            };
        case REMOVE_NOTIFICATION:
            return {
                ...state,
                message: ''
            };
        default:
            return state;
    }
}
