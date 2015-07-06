var $ = require('dragonjs');

/**
 * @class Burst
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    type: $.particle.Square,
    pos: $.canvas.center.subtract(
        $.Point(120, 0)
    ),
    style: function (ctx) {
        ctx.fillStyle = 'red';
    },
    //volume: 5,
    speed: 3000,
    lifespan: 1000
});
