
var connect = require('connect');
var http = require('http');
var express = require('express');

var app = express();

/*server.use(function(req, res){
  res.end('Hello from Node.js/io.js + Connect.js!\n');
})*/

app.get('/', function(req, res){
  res.send('Hello from Node.js/io.js + Connect.js!\n');
});
app.get('/test', function(req, res){
  res.send('Hasdfasdfasdfasdfadsfadfsello from Node.js/io.js + Connect.js!\n');
});

http.createServer(app).listen(3000);
if (typeof(PhusionPassenger) !== 'undefined') {
  console.log('Example app running inside Passenger.');
} else {
  console.log('Example app listening on http://127.0.0.1:3000/');
}
