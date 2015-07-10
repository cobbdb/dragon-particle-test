var $ = require('dragonjs');

/**
 * @class Dust
 * @extends Dragon.Emitter
 */
module.exports = $.particle.Emitter({
    name: 'dust',
    type: require('./dust-particle.js'),
    pos: $.canvas.center.add(
        $.Point(0, -50)
    ),
    volume: 2,
    speed: 800,
    conf: function () {
        return {
            rotationSpeed: 0,
            friction: 0.025,
            src: 'dust.png',
            size: $.Dimension(12, 4),
            lifespan: 800,
            fade: 0.01,
            speed: $.Vector(
                ($.random() - 0.5) * 0.8,
                -0.1
            )
        };
    }
});
