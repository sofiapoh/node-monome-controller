module.exports = function (model, device) {
  if (!device) {
    return;
  }
  for (var yOffset = 0; yOffset < device.sizeY; yOffset += 8) {
    for (var xOffset = 0; xOffset < device.sizeX; xOffset += 8) {
      var mapLed = [];
      for (var y = yOffset; y < yOffset + 8; y++) {
        for (var x = xOffset; x < xOffset + 8; x++) {
          if (!mapLed[y - yOffset]) {
            mapLed[y - yOffset] = [];
          }
          mapLed[y - yOffset][x - xOffset] = model[y][x];
        }
      }
      device.map(xOffset, yOffset, mapLed);
    }
  }
};
