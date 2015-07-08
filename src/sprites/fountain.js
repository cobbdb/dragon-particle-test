var $ = require('dragonjs');

/**
 * @class Fountain
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    name: 'fountain',
    type: $.particle.Circle,
    pos: $.canvas.center.add(
        $.Point(120, 0)
    ),
    style: function (ctx) {
        ctx.fillStyle = '#3114eb';
    },
    particle: {
        gravity: 0.015
    }
});
