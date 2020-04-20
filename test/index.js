const test = require('tape'); 
const { create2DArray } = require('../src/helpers/array.js');
const { getNeighbourCoords } =  require('../src/scripts/conway.js');

test('Creates a 2D array', function (t){
  t.plan(1);
  t.deepEqual(create2DArray(3, 2, 1), [[1,1,1],[1,1,1]], 'Should return a 2 by 3 array with value of 1');
});

test('Returns the neighbours for the given cordinates', function(t){
  t.plan(1);
  t.deepEqual(getNeighbourCoords(5,6),
  [ [ 4, 5 ],
  [ 5, 5 ],
  [ 6, 5 ],
  [ 4, 6 ],
  [ 6, 6 ],
  [ 4, 7 ],
  [ 5, 7 ],
  [ 6, 7 ] ], 'should return 2d array with the neighbour coordinates' )
});
