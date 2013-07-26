var express = require('express');
var fs = require('fs');
var Buffer = require('buffer').Buffer;


var app = express.createServer(express.logger());
app.get('/', function(request, response) {
    //response.send('Hello World 2!');
    var buffer = new Buffer(100);
    buffer = fs.readFileSync('./index.html','utf8');
    response.send(buffer.toString());
});

//var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


