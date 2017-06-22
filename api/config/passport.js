var jwt = require("jwt-simple");

var LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var config = require("../config");

var User = require("../models/user");

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        User.findOne({where: {email: user.email}}).then(user => {
            done(null, user);
        }, err => {done(err, null);});
    });

    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function (req, email, password, done) {
        User.findOne({ where: {email: email} }).then(user => {
            if (!user) {
                return done(null, false, {
                    status: false,
                    message: "No user found."
                });
            }

            if (!user.validPassword(password)) {
                return done(null, false, {
                    status: false,
                    message: "Wrong password."
                });
            }

            user.update({token: "JWT " + jwt.encode({_id: user._id, email: user.email}, config.security.secret)})
                .then(user => {
                    return done(null, user, {
                        status: true,
                        message: "Login success."
                    });
                }, err => {done(err, null);});

        }, err => {done(err, null);});
    }));

    passport.use(new JwtStrategy({
        secretOrKey: config.security.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    }, function(payload, done) {
        User.findOne({_id: payload._id}, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    status: false,
                    message: "Failed to authenticate token."
                });
            }

            return done(null, user, {
                status: true,
                message: "Authenticate success."
            });
        });
    }));
};
