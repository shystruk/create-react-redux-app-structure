export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

/**
 * @param {String} message
 * @return {Object}
 */
export function pushNotification(message) {
    return {
        type: SHOW_NOTIFICATION,
        message
    };
}

/**
 * @return {Object}
 */
export function removeNotification() {
    return {
        type: REMOVE_NOTIFICATION
    };
}
