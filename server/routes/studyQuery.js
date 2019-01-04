const pool = require('../db');

module.exports = app => {
  app.get('/api/studies', (request, response, next) => {
    pool.query('SELECT * FROM "studies"', (err, res) => {
      if (err) return next(err);

      response.json(res);
    });
  });



}