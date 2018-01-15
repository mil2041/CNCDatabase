const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const pool = require('./db');

app.use(bodyParser.json());

app.get('/persons', (request, response, next) => {
  pool.query('SELECT * FROM "nonCodingMutations"', (err, res) => {
    if (err) return next(err);

    response.json(res);
  });
});

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
