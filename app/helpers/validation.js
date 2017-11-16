/**
 * @doc
 * Validation helpers
 */

'use strict';

/**
 * @param {String} email
 */
export const isEmailValid = email => {
    const reqExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reqExp.test(email);
};
