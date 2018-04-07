export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

/**
 * @param {String} message
 * @return {Object}
 */
export function showAlert(message) {
    return {
        type: SHOW_ALERT,
        message
    };
}

/**
 * @return {Object}
 */
export function hideAlert() {
    return {
        type: HIDE_ALERT
    };
}
