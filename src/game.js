var $ = require('dragonjs');

$.loadAssets(function () {
    $.debug();
    // VVV this take FOREVER to complete
    // .... why?
    $.addScreens([
        require('./screens/stage.js')
    ]);
});
