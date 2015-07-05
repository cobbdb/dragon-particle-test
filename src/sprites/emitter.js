var $ = require('dragonjs');

/**
 * @class Emitter
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emmiter({
    type: $.particle.Square,
    pos: $.Point($.canvas.center),
    style: function (ctx) {
        ctx.fillStyle = 'yellow';
    }
});