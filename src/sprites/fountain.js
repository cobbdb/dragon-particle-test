var $ = require('dragonjs');

/**
 * @class Fountain
 * @extends Dragon.Emitter
 */
module.exports = $.particle.Emitter({
    name: 'fountain',
    type: $.particle.Circle,
    pos: $.canvas.center.add(
        $.Point(120, 50)
    ),
    style: function (ctx) {
        ctx.fillStyle = '#3114eb';
    },
    particle: {
        gravity: 0.015,
        friction: 0.99
    }
});
