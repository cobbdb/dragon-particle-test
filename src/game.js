var $ = require('dragonjs');

$.loadAssets(function () {
    $.debug();
    $.addScreens([
        require('./screens/stage.js')
    ]);
});
