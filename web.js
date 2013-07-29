var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var buf;
fs.readFile('index.html', function(err, data) {
  if(err) throw err;
  buf = new Buffer(data);
});

app.get('/', function(request, response) {
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
