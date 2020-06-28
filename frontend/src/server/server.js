const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send({ app: 'server' });
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('escuchando puerto 3000');
});
