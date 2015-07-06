var $ = require('dragonjs');

/**
 * @class Fountain
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    type: $.particle.Square,
    pos: $.canvas.center.add(
        $.Point(120, 0)
    ),
    style: function (ctx) {
        ctx.fillStyle = '#3114eb';
    },
    gravity: 0.03
});
