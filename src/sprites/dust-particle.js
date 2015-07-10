var $ = require('dragonjs');

module.exports = function (opts) {
    return $.particle.Image(opts).extend({
        update: function () {
            this.base.update();
            this.scale(
                this.scale() + 0.015
            );
        },
        reset: function () {
            this.base.reset();
            this.scale(1);
        }
    });
};
