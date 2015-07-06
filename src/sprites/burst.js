var $ = require('dragonjs');

/**
 * @class Burst
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    name: 'burst',
    type: $.particle.Square,
    pos: $.canvas.center.subtract(
        $.Point(120, 0)
    ),
    //volume: 5,
    speed: 10000,
    particle: {
        lifespan: 500,
        style: function (ctx) {
            ctx.fillStyle = 'red';
        }
    }
});
