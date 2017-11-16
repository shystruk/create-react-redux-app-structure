/**
 * @doc
 * Global object for sharing functional helpers
 */

var app = app || {};

(function () {
'use strict';

    /**
     * Publish/Subscribe for Window Resize Listener
     */
    app.resizeEvent = Object.freeze({
        subscribers: [],
        subscribe: function(subscriber) {
            this.subscribers.push(subscriber);
        },
        publish: function(args) {
            this.subscribers.forEach(function (subscriber) {
                try {
                    subscriber(args);
                } catch(ignore) {}
            })
        }
    });


    /**
     * A function that performs no operations.
     */
    app.noop = Object.freeze(function(){});

}());
