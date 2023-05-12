const http = require('http');
const Server = require('socket.io').Server;
const express = require('express');
const app = http.createServer(express);


const io = new Server(app, {
	transports:['websocket']
});

io.on('connect', (socket) => {
	socket.on('send', data => {
		io.emit('message_receive', {
			user:socket.handshake.query.user,
			message:data
		});
	});
})

app.listen(3000, () => { console.log('Listening: ', 3000) })