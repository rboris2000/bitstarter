var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf;
fs.readFileSync('./Index.html', function read(err, data) {
    if (err) {
        throw err;
    }

    buf = new Buffer(data);

});


app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


