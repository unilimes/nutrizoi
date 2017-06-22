var bcrypt = require("bcrypt-nodejs");
var jwt = require("jwt-simple");
var passport = require("passport");

var User = require('../models/User');
var config = require("../config");

var usersMethods = {
    create: (req, res, next) => {
        User.findOrCreate({where: {email: req.body.email}, defaults: { password: req.body.password }})
            .spread((user, created) => {
                if(!created){
                    return res.json({
                        status: false,
                        message: "That email is already taken."
                    });
                }

                user.update({token: "JWT " + jwt.encode({_id: user._id, email: user.email}, config.security.secret)})
                    .then(user => {
                        res.json({
                            status: true,
                            message: "Signup success.",
                            res: user
                        });
                    }, err => {throw err;});

            }).catch(err => {throw err;});
    },
    login: (req, res, next) => {
        passport.authenticate("local", function (err, user, info) {
            if (err) throw err;

            if (!user) {
                return res.json({
                    status: false,
                    message: info.message
                });
            }

            req.login(user, function (err) {
                if (err)  throw err;

                res.json({
                    status: true,
                    message: info.message,
                    res: req.user
                });
            });
        })(req, res, next);
    },
    logout: (req, res, next)=>{

        if (!req.isAuthenticated()) {
            return res.json({
                status: false,
                message: "You are not logged in."
            });
        }

        req.user.update({token: ""})
            .then(user => {
                req.logout();
                res.json({
                    status: true,
                    message: "Logout success."
                });
            }, err => {throw err;});
    }
};

module.exports = usersMethods;