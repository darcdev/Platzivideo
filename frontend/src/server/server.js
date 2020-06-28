import express from 'express';
import config from './config';

const { env, port } = config;
const app = express();

if (env === 'development') {
  console.log('development config');
}
app.get('*', (req, res) => {
  console.log('recargando');
  res.send({ app: 'server' });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log('escuchando puerto 3000');
  console.log(port);
});
