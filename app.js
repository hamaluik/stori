var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var openid = require('openid');

app.set('port', (process.env.PORT || 5000));

app.use(express.static('template'));

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});

http.listen(app.get('port'), function(){
  console.log('listening on *:' + app.get('port'));
});