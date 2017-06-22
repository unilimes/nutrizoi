var router = require("express").Router();
var usersMethods = require("../../controllers/userController");

router.post("/signup", function (req, res, next) {
    usersMethods.create(req, res, next);
});

router.post("/login", function (req, res, next) {
    usersMethods.login(req, res, next);
});

router.post("/logout", function (req, res, next) {
    usersMethods.logout(req, res, next);
});

module.exports = router;
