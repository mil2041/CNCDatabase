const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
          done(null, user);
      })
});


// console.developers.google.com
passport.use(
    new GoogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        //console.log('access token',accessToken);
        //console.log('refresh token',refreshToken);
        //console.log('profile', profile);
        User.findOne({ googleId: profile.id })
        .then( (existingUser) => {
            if (existingUser) {
                 //  a user ID record exist
                 done(null, existingUser);
            } else {
                 // user ID record does not exist
                 new User({ googleId: profile.id })
                  .save()
                  .then(user => done(null, user));
            }

        }) 
        


    })
  );



/*
passport.use(
    new LocalStrategy({
       
    }, (username, password, done) => {
        username.findOne({ username: username } ).then(

        );
    })

);

*/
