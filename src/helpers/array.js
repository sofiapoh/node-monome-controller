function create2DArray(cols, rows, value) {
  var arr = [];
  for (var r = 0; r < rows; r++) {
    arr[r] = [];
    for (var c = 0; c < cols; c++) {
      arr[r][c] = value;
    }
  }
  return arr;
}

module.exports = { create2DArray };
