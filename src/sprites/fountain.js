var $ = require('dragonjs');

/**
 * @class Fountain
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    name: 'fountain',
    type: $.particle.Square,
    pos: $.canvas.center.add(
        $.Point(120, 0)
    ),
    speed: 4000,
    volume: 15,
    particle: {
        style: function (ctx) {
            ctx.fillStyle = '#3114eb';
        },
        gravity: 0.01,
        lifespan: 300
    }
});
