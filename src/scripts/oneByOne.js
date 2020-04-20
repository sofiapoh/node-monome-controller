module.exports = {
  run: oneByOne,
  defaultInterval: 1000,
};


function oneByOne (model) {
  var newModel = [];
  for (var r = 0; r < model.length; r++) {
    newModel[r] = [];
    for (var c = 0; c < model[r].length; c++) {
      if (c === 0 && model[r][c] === 0 ){
        // turn on if first cell is empty -- initial state
        newModel[r][c] = 1;
      } else if (model[r][c] === 1) {
        // keep on - on
        newModel[r][c] = 1;
      } else if(model[r][c-1] === 1) {
        // turn on if previous cell is on
        newModel[r][c] = 1;
      } else {
        // else keep off 
        newModel[r][c] = 0;
      }
    }
  }
  return newModel;
}
