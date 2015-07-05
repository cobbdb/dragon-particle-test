var $ = require('dragonjs');

/**
 * @class Stage
 * @extends Dragon.Screen
 */
module.exports = $.Screen({
    name: 'stage',
    sprites: [
        require('../sprites/emitter.js')
    ],
    one: {
        ready: function () {
            this.start();
        }
    }
}).extend({
    draw: function (ctx) {
        ctx.fillStyle = '#f1f1f1';
        ctx.fillRect(0, 0,
            $.canvas.width,
            $.canvas.height
        );
        this.base.draw(ctx);
    }
});
