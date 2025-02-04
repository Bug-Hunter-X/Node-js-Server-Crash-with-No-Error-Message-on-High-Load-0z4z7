const http = require('http');

const requestListener = function (req, res) {
  try {
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});