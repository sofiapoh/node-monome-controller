var runner = require('./index.js');
var script_name = process.argv[2];
var script = require('./scripts/'+ script_name + '.js');

runner(script['run'], script['defaultInterval']);
