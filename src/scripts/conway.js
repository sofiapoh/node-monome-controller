module.exports = {
  run: conwayStep,
  defaultInterval: 300,
  getNeighbourCoords: getNeighbourCoords,
};



function isAlive(grid, x, y) {
  return Boolean(grid[y] && grid[y][x]);
}

function getNeighbourCoords(x, y){
  return [
    [x-1, y-1], // top left
    [x,   y-1], // top
    [x+1, y-1], // top right
    [x-1, y], // left
    [x+1, y], // right
    [x-1, y+1], // bottom left
    [x,   y+1], // bottom
    [x+1, y+1], // bottom right
  ];
}


function countLivePixels(grid, coordsList) {
  return coordsList.map( function(coords){
    return isAlive(grid, coords[0], coords[1]);
  }).reduce(function(a, b){
    return a + b;
  });
}

function iterate(grid, newGrid, callback){
  for(var y = 0; y < grid.length; y++) {
    for(var x = 0; x < grid[y].length; x++) {
      newGrid[y][x] = callback(x, y, grid[y][x]);
    }
  }
}

function conwayStep(grid){
  var newGrid = grid.map(function(arr) {
    return arr.slice();
  });
  iterate(grid, newGrid, function(x, y, old_value){
    var newValue;
    var numberOfLiveNeighbours = countLivePixels(grid, getNeighbourCoords(x, y));
    if (old_value == 1) {
      newValue = (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3) ? 1 : 0;
    } else {
      newValue = numberOfLiveNeighbours === 3 ? 1 : 0;
    }
    return newValue;
  });
  return newGrid;
}
