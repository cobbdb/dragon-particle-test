var $ = require('dragonjs');

/**
 * @class Stage
 * @extends Dragon.Screen
 */
module.exports = function (opts) {
    return $.Screen({
        name: 'stage',
        sprites: [
            require('../sprites/emitter.js')
        ],
        one: {
            ready: function () {
                this.start();
            }
        }
    });
};
