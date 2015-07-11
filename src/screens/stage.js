var $ = require('dragonjs');

/**
 * @class Stage
 * @extends Dragon.Screen
 */
module.exports = $.Screen({
    name: 'stage',
    sprites: [
        require('../sprites/fountain.js'),
        require('../sprites/burst.js'),
        require('../sprites/dust.js')
    ],
    one: {
        $added: function () {
            this.start();
        }
    }
}).extend({
    draw: function (ctx) {
        $.canvas.clear();
        this.base.draw(ctx);
    }
});
