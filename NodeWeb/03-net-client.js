const { createConnection,  } = require('net');

const socket = createConnection(80, 'example.com')
socket.pipe(process.stdout);

// REQUETE HTTP
socket.on('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.write('User-agent: NodeBot\r\n');
  socket.write('\r\n');
  socket.end();
});
