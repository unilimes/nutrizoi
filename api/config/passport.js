var jwt = require("jwt-simple");
//var jwt = require("jsonwebtoken");

var LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;

var config = require("../config");

var User = require("../models/user");

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    }, function (req, username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false, {
                    status: false,
                    message: "No user found."
                });
            }

            if (!user.comparePassword(password)) {
                return done(null, false, {
                    status: false,
                    message: "Oops! Wrong password."
                });
            }

            user.token = "JWT " + jwt.encode({_id: user._id, email: user.email}, config.security.secret);

            user.save(function (err, user) {
                return done(null, user, {
                    status: true,
                    message: "Login success."
                });
            });
        });
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
