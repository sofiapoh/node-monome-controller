module.exports = {
  run: randomStep,
  defaultInterval: 500,
};

function randomStep(model) {
  var newModel = [];
  for (var r = 0; r < model.length; r++) {
    newModel[r] = [];
    for (var c = 0; c < model[r].length; c++) {
      newModel[r][c] = Math.round(Math.random());
    }
  }
  return newModel;
}
