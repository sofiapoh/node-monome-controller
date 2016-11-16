var serialosc = require('serialosc');
var refresh = require('./helpers/refresh.js');
var create2DArray = require('./helpers/array.js');

// TODO: Make into an object so you can call start and stop on it so it wont
// loop eternally...

module.exports = function (script, interval) {
  serialosc.on('device:add', function (device) {

    //init
    var model = create2DArray(device.sizeX, device.sizeY, 0);
    refresh(model, device);

    var pause = 0;


    device.on('key', function (data) {
      if (data['s'] === 0){
        return;
      }
      pause = 1000;
      var currentValue = model[data['y']][data['x']];
      var newValue = currentValue == 1 ? 0 : 1;
      model[data['y']][data['x']] = newValue;
      data['s'] = newValue;
      device.set(data);
    });


    // loop
    setInterval(function(){
      if (pause > 0){
        pause -=interval;
        return;
      }
      model = script(model);
      refresh(model, device);
    }, interval);

  });
  serialosc.start();
};
