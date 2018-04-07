/**
 * @doc
 * Global object for sharing functional helpers
 */

var app = app || {};

(function () {
    /**
     * A function that performs no operations.
     */
    app.noop = Object.freeze(function(){});

    app.locale = 
        (navigator.languages && navigator.languages[0])
        || navigator.language
        || navigator.userLanguage
        || 'en';

}());
