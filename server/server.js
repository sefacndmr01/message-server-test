var http = require('http');
var Server = require('socket.io').Server;
var express = require('express');
var app = http.createServer(express);
var io = new Server(app, {
    transports: ['websocket']
});
io.on('connect', function (socket) {
    socket.on('send', function (data) {
        io.emit('message_receive', {
            user: socket.handshake.query.user,
            message: data
        });
    });
});
app.listen(3000, function () { console.log('Listening: ', 3000); });
