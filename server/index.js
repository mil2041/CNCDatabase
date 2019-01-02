const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const bodyParser = require('body-parser');

//const pool = require('./db');
const routes = require('./routes/geneQuery');
//const authRoutes = require('./routes/authRoutes');


mongoose.connect(keys.mongoURI);


const app = express();

app.use(
  cookieSession({
     maxAge: 30 * 24 * 60 * 60 * 1000,
     keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

require('./routes/authRoutes')(app);

//app.get('/', (req, res) => res.sendFile('auth.html', { root : __dirname}));
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




//

const PORT = process.env.PORT || 5200;
//PORT = 5000;
//app.listen(PORT);

app.listen(PORT , () => console.log('App listening on port ' + PORT));