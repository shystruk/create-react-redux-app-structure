/**
 * @doc
 * Validation helpers
 */

/**
 * @param {String} email
 */
export const isEmailValid = email => {
    const reqExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    return reqExp.test(email);
};
