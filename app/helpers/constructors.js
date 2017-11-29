'use strict';

/**
 * @param {Function} instanceFn
 * @param {Number} instanceInterval
 * @constructor
 **/
export function Interval(instanceFn, instanceInterval) {
    let timer;

    this.start = (fn = instanceFn , interval = instanceInterval) => {
        if (!timer) {
            timer = setInterval(() => { fn(); }, interval);
        }
    };

    this.clear = () => {
        clearInterval(timer);
        timer = void 0;
    };
}
