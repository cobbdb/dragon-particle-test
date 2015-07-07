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
    volume: 20,
    speed: 1500,
    particle: {
        lifespan: 300,
        style: function (ctx) {
            ctx.fillStyle = 'red';
        }
    }
});
