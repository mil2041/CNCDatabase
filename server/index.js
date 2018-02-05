const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const routes = require('./routes/geneQuery');

const app = express();

app.use(bodyParser.json());

routes(app);

/*
app.get('/persons', (request, response, next) => {
  pool.query('SELECT * FROM "nonCodingMutations"', (err, res) => {
    //if (err) return next(err);

    response.json(res);
  });
});

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
*/

const PORT = process.env.PORT || 5000;
//PORT = 5000;
app.listen(PORT);
