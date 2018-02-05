const pool = require('../db');

module.exports = app => {
  app.get('/persons', (request, response, next) => {
    pool.query('SELECT * FROM "nonCodingMutations"', (err, res) => {
      if (err) return next(err);

      response.json(res);
    });
  });

  app.get('/geneName/:geneName', (request, response, next) => {
    const { genename } = request.params;
    pool.query(
      'SELECT * FROM "nonCodingMutations" WHERE "geneName" = $1',
      [genename],
      (err, res) => {
        if (err) return next(err);

        response.json(res);
      }
    );
  });

  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });
};
