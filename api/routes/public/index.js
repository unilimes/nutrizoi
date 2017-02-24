var router = require("express").Router();

router.all("/", function (req, res) {
    res.json({
        status: true,
        message: "Info about api"
    });
});

router.use("/recipes", require("./recipes"));

module.exports = router;
