var passport = require("passport");

module.exports = function (req, res, next) {
    var token = req.headers["authorization"];
    passport.authenticate("jwt", {session: false}, function (err, user, info) {
        if (err) {
            throw err;
        }
        

        if (!user) {
            return res.status(401).json({
                status: false,
                message: info.message
            });
        }

        if (user.token !== token) {
            return res.status(403).json({
                status: false,
                message: "Expired token"
            });
        }

        if (!req.isAuthenticated()) {
            return res.status(403).json({
                status: false,
                message: "Not authenticated"
            });
        }

        next();
    })(req, res, next);
};
