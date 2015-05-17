// Requires
var express = require('express');
var app = express();

// Port to launch server
var argv = require('minimist')(process.argv.slice(2));
port = argv.port || 31416;

if(isNaN(port)) {
	console.log("Port \"%s\" is not a number.", port);
	process.kill(1);
}

// Applications
app.use(express.static(__dirname + "/public"));

// Start server
var server = app.listen(port, function () {
  console.log('Example app listening at http://%s:%s', 
  	server.address().address,
  	server.address().port);
});