const http = require('http');

const config = require('./config');
const app  = require('./app');
const mongoose = require('mongoose');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
  server.listen(config.port, () => {
    console.log('Server started on port ' + config.port);
  });
})
