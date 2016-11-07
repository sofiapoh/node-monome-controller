var serialosc = require('serialosc');
var refresh = require('./helpers/refresh.js');
var create2DArray = require('./helpers/array.js');

// TODO: Make into an object so you can call start and stop on it so it wont
// loop eternally...

module.exports = function (turnScript, interval) {
  serialosc.on('device:add', function (device) {

    //init
    var model = create2DArray(device.sizeX, device.sizeY, 0);
    refresh(model, device);

    // loop
    setInterval(function(){
      model = turnScript(model);
      refresh(model, device);
    }, interval);

  });
  serialosc.start();
};
