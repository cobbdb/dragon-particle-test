var $ = require('dragonjs');

/**
 * @class Emitter
 * @extends Dragon.Sprite
 */
module.exports = $.particle.Emitter({
    type: $.particle.Square,
    pos: $.Point($.canvas.center),
    style: function (ctx) {
        ctx.fillStyle = 'yellow';
    }
}).extend({
    update: function () {
        this.base.update();
    },
    draw: function (ctx) {
        this.base.draw(ctx);
    }
});
