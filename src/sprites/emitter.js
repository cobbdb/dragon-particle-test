var $ = require('dragonjs');

/**
 * @class Emitter
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    type: $.particle.Square,
    pos: $.canvas.center,
    style: function (ctx) {
        ctx.fillStyle = 'yellow';
    }
});
