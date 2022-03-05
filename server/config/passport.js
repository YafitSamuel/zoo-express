const jwtStrategy = require("passport-jwt").Strategy; //איך לפענח
const ExtractJwt = require("passport-jwt").ExtractJwt; //Extracting information from the
const users = require("../models/user-model");

const options = {
  secretOrKey: process.env.SECRET_KEY,
};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //Goes to the request and takes out the token
module.exports = (passport) => {
  passport.use(
    new jwtStrategy(options, (payload, done) => {
      users
        .findById( payload.user._id )
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => done(err, false));
    })
  );
};
