const { Controller } = require("./src/index.js");

const scriptName = process.argv[2];

const script = require("./src/scripts/" + scriptName);
const controller = new Controller({
  interval: 300,
});

controller.initialize();
controller.startLoop(script["run"]);
