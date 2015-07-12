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
    volume: 8,
    speed: 2000,
    style: function (ctx) {
        ctx.fillStyle = '#b84760';
    },
    conf: function () {
        return {
            friction: 0.06,
            lifespan: 1500,
            speed: $.Vector(
                ($.random() - 0.5) * 6,
                ($.random() - 0.5) * 6
            )
        };
    }
});
