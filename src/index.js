const serialosc = require("serialosc");
const { create2DArray } = require("./helpers/array");

class Controller {
  constructor(config) {
    this.interval = config.interval || 500;
    this.keypressPause = config.keypressPause || 500;
    this.device = undefined;
    this.grid = undefined;
  }

  //TODO: Toggle mode => editing mode

  initialize = () => {
    serialosc.on("device:add", (device) => {
      this.device = device;
      this.grid = create2DArray(device.sizeX, device.sizeY, 0);
      console.log("Grid initialized 🔲");
      // set up initial empty grid
      this.syncronize(this.grid);
    });
    serialosc.start();
  };

  syncronize = (grid) => {
    if (!this.device) {
      return;
    }

    for (let yOffset = 0; yOffset < this.device.sizeY; yOffset += 8) {
      for (let xOffset = 0; xOffset < this.device.sizeX; xOffset += 8) {
        const LEDMap = [];
        for (let y = yOffset; y < yOffset + 8; y++) {
          for (let x = xOffset; x < xOffset + 8; x++) {
            if (!LEDMap[y - yOffset]) {
              LEDMap[y - yOffset] = [];
            }
            LEDMap[y - yOffset][x - xOffset] = grid[y][x];
          }
        }

        this.device.map(xOffset, yOffset, LEDMap);
      }
    }
  };

  //TODO: this only updates the model, no looping to be done in the controller
  // Playback mode goes into the controller app

  startLoop = (script) => {
    setInterval(() => {
      if (this.keypressPause > 0) {
        this.keypressPause -= this.interval;
        return;
      }

      this.grid = script(this.grid);
      this.syncronize(this.grid);
    }, this.interval);
  };
}

module.exports = { Controller };
