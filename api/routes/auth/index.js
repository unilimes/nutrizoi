var passport = require("passport");
var router = require("express").Router();
var jwt = require("jwt-simple");

var config = require("../../config");

var User = require("../../models/user");
var Diary = require("../../models/diary");

router.all("/", function (req, res) {
    res.json({
        status: true,
        message: "Info about auth."
    });
});

router.post("/login", function (req, res, next) {
    passport.authenticate("local", function (err, user, info) {
        if (err) {
            throw err;
        }

        if (!user) {
            return res.json({
                status: false,
                message: info.message
            });
        }

        req.login(user, function (err) {
            if (err) { throw err; }

            res.json({
                status: true,
                message: info.message,
                res: user
            });

        });
    })(req, res, next);
});

router.post("/signup", function (req, res) {
    User.findOne({email: req.body.email }, function (err, user) {
        if (err) {
            throw err;
        }
        if (user) {
            res.json({
                status: false,
                message: "That email is already taken."
            });
        } else {
            
            new User({
                email: req.body.email,
                password: req.body.password
            }).save(function (err, user) {
                if (err) {
                    throw err;
                }

                user.token = "JWT " + jwt.encode({_id: user._id, email: user.email}, config.security.secret);

                user.save(function (err, user) {
                    if (err) {
                        throw err;
                    }

                    req.login(user, function (err) {
                        if (err) {
                            throw err;
                        }

                        res.json({
                            status: true,
                            message: "Signup success.",
                            res: user
                        });
                    });
                });
            });
        }
    });
});

router.post("/logout", function (req, res) {
    if (!req.isAuthenticated()) {
        return res.json({
            status: false,
            message: "You are not logged in."
        });
    }

    req.user.token = "";
    req.user.save(function () {
        req.logout();

        res.json({
            status: true,
            message: "Logout success."
        });
    });
});

module.exports = router;
