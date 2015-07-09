var $ = require('dragonjs');

/**
 * @class Dust
 * @extends Dragon.Emitter
 */
module.exports = $.particle.Emitter({
    name: 'dust',
    type: $.particle.Image,
    pos: $.canvas.center.add(
        $.Point(0, -50)
    ),
    volume: 1,
    speed: 400,
    particle: {
        rotationSpeed: 0,
        friction: 0.99,
        src: 'dust.png',
        size: $.Dimension(12, 12),
        lifespan: 1000
    }
});
