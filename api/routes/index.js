var router = require("express").Router();

// var authenticate = require("../middleware/authenticate");
//
// router.use("/private", authenticate, require("./private"));
//
// router.use("/public", require("./public"));
//
router.use("/auth", require("./auth"));

module.exports = router;
