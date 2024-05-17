import { createServer } from "node:http";


const server = createServer((req, res) => {
  console.log('request received');
  console.log('user-agent', req.headers["user-agent"]);
  console.log('url', req.url);
  console.log('method', req.method);

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Bonjour');
  res.end();
});

// server.on('listening', () => {
//   console.log('server started');
// });

server.on('error', (err) => {
  console.log('server error', err);
});

// server.on('request', (req, res) => {
//   console.log('request received');
//   console.log('user-agent', req.headers["user-agent"]);
//   console.log('url', req.url);
//   console.log('method', req.method);

//   res.statusCode = 200;
//   res.setHeader('Content-type', 'text/plain');
//   res.write('Hello');
//   res.end();
// });

server.listen(8080, () => {
  console.log('server started');
});


