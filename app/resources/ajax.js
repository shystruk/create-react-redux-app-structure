import jQuery from 'jquery';

/**
 * @param {String} method
 * @param {String} url
 * @param {Object} data
 * @param {Object} config
 * @return {Promise}
 */
export default function (method, url, data, config) {
    const options = {};

    if (data) {
        options.data = data;
    }

    if (config && config.headers) {
        options.headers = config.headers;
    }

    return new Promise((resolve, reject) => {
        jQuery.ajax(Object.assign({}, {
                method,
                url,
            },
            options
        ))
        .done(response => resolve(response))
        .fail(errResponse => reject(errResponse));
    });
}
