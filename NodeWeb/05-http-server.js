const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Server', 'NodeServer');

  if (req.url === '/') {
    res.write('Home');
  } else if (req.url === '/hello') {
    res.write('Hello');
  } else {
    res.statusCode = 404;
    res.write('Not Found');
  }

  res.end();
});

// server.on('request', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.setHeader('Server', 'NodeServer');
//   res.write('Hello');
//   res.end();
// })

server.listen(8080, () => {
  console.log('Server started on port 8080');
});
