var $ = require('dragonjs');

/**
 * @class Burst
 * @extends Dragon.Emitter
 */
module.exports = $.particle.Emitter({
    name: 'burst',
    type: $.particle.Square,
    pos: $.canvas.center.add(
        $.Point(-120, 50)
    ),
    volume: 5,
    speed: 1500,
    style: function (ctx) {
        ctx.fillStyle = '#b84760';
    },
    particle: {
        friction: 0.98,
        lifespan: 1500
    }
});
