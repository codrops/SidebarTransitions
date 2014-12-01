//
// # sidebar-transitions
//
var http = require('http');
var path = require('path');

var express = require('express');

// Creates a new instance of sidebar-transitions with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("sidebar-transitions listening on ", addr.address + ":" + addr.port);
});