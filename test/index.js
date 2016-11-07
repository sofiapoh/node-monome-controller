var test = require('tape');
var create2DArray = require('../src/helpers/array.js');

test('Creates a 2D array', function (t){
  t.plan(1);
  t.deepEqual(create2DArray(3, 2, 1), [[1,1,1],[1,1,1]], 'Should return a 2 by 3 array with value of 1');
});
