import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(cors()); // le serveur autorise toutes les origines à le requeter
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('request received');
  console.log('user-agent', req.headers["user-agent"]);
  console.log('url', req.url);
  console.log('method', req.method);

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Bonjour');
  res.end();
});

app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello' });
});

app.get('/api/users/:userId', (req, res) => {
  res.json({ msg: 'User ' + req.params.userId });
});

app.post('/api/users', (req, res) => {
  const user = req.body;
  res.json({ msg : 'User created ' + user.name });
});


app.listen(8080, () => {
  console.log('server started');
});


