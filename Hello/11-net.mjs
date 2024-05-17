import { createServer } from "node:net";


const server = createServer((socket) => {
  console.log('connection received');
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Host: localhost\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');
  socket.end();
});

// server.on('listening', () => {
//   console.log('server started');
// });

server.on('error', (err) => {
  console.log('server error', err);
});

// server.on('connection', (socket) => {
//   console.log('connection received');
//   socket.pipe(process.stdout);
//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Host: localhost\r\n');
//   socket.write('Content-type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Hello\r\n');
//   socket.end();
// });

server.listen(8080, () => {
  console.log('server started');
});


