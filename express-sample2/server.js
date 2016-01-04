var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080, function () {
  var port = server.address().port;
  console.log('express-sample1 app listening on port', port);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

  // notify to all the sockets except the one just connected
  socket.broadcast.emit('update', 'Client connected');

  // the client can get this message listening on "message" event
  socket.send("Hi!! I'm not using the event based communication");

  socket.on('disconnect', function () {
    io.emit('update', 'Client disconnected');
  });

  socket.on('broadcast', function (data) {
    socket.broadcast.emit('update', data);
  });

  socket.on('all', function (data) {
    io.emit('update', data);
  });

  socket.on('echo', function (data) {
    socket.emit('update', data);
  });

});
