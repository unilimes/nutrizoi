var router = require("express").Router();

var Day = require("../../models/day");


//get all user days 

router.get("/", function (req, res) {
    Day.find({ user: req.user._id }, function (err, days) {
        if (err) {
            return res.json({
                status: false,
                message: "Undefined error, no diaries found."
            });
        }

        if (!days) {
            return res.json({
                status: false,
                message: "No days found."
            });
        }

        res.json({
            status: true,
            res: days
        });

    });
});

//get all days by diapasone timeStamps

router.post("/", function (req, res) {
    Day.find({
        user: req.user._id,
        timestamp: {
            $gt: req.body.firstDay,
            $lt: req.body.lastDay
        }
    }).exec(function (err, days) {
        if (err) {
            throw err;
        }

        if (days.length == 0) {
            return res.json({
                status: false,
                message: "No days found."
            });
        }

        res.json({
            status: true,
            res: days
        });
    });
});

//get all days by timeStamp

router.get("/:id", function (req, res) {
    Day.find({
        user: req.user._id,
        timestamp: req.params.id
    }).exec(function (err, days) {
        if (err) {
            throw err;
        }

        if (days.length == 0) {
            return res.json({
                status: false,
                message: "No days found."
            });
        }

        res.json({
            status: true,
            res: days
        });
    });
});


module.exports = router;
