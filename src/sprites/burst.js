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
    volume: 3,
    speed: 1500,
    style: function (ctx) {
        ctx.fillStyle = 'red';
    },
    particle: {
        lifespan: 1500
    }
});
