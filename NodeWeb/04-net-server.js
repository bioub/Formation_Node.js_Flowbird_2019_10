const { createServer } = require('net');

const server = createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('Server: MyServer\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.end();
});

server.listen(8080);
