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
        ctx.clearRect(0, 0,
            $.canvas.width,
            $.canvas.height
        );
        this.base.draw(ctx);
    }
});
