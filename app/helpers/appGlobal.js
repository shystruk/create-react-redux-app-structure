/**
 * @doc
 * Global object for sharing functional helpers
 */

var app = app || {};

(function () {
'use strict';

    var subPub = Object.seal({
        key: 0,
        subscribers: {},
        subscribe: function (subscriber) {
            this.subscribers[this.key] = subscriber;

            return this.key++;
        },
        publish: function () {
            var args = Array.prototype.slice.call(arguments);

            for (var sub in this.subscribers) {
                try {
                    this.subscribers[sub](args[0], args[1]);
                } catch (ignore) {
                }
            }
        },
        unsubscribe: function (key) {
            delete this.subscribers[key];
        },
    });

    /**
     * Publish/Subscribe for Window Resize Listener
     */
    app.resizeEvent = Object.assign({}, subPub, { subscribers: {} });

    /**
     * Publish/Subscribe for VisibilityChange Listener
     */
    app.visibilityChangeEvent = Object.assign({}, subPub, { subscribers: {} });

    /**
     * A function that performs no operations.
     */
    app.noop = Object.freeze(function(){});

}());
