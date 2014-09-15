var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');

var controller_id;
var controlee_id;

app.get('/controller', function(req, res){
  res.sendfile('index.html');
});
app.get('/controlee', function(req, res){
  res.sendfile('index2.html');
});

io.on('connection', function(socket){
    
  console.log("Socket id "+socket.id+" connected");

  socket.on('move', function(data){
    io.emit(data,'test');
    console.log(data);
  });

});




http.listen(3000, function(){
  console.log('listening on *:3000');
});
