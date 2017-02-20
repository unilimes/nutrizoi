var router = require("express").Router();

var Diary = require("../../models/diary");

var User = require("../../models/user");


//get all user diaries 

router.get("/", function (req, res) {
    Diary.find({ user: req.user._id }, function (err, diaries) {
        if (err) {
            return res.json({
                status: false,
                message: "Undefined error, no diaries found."
            });
        }

        if (diaries.length == 0) {
            return res.json({
                status: false,
                message: "No diaries found."
            });
        }

        res.json({
            status: true,
            res: diaries
        });

    });
});

// get diary by id 

router.get("/:id", function (req, res) {
    Diary.findOne({
        _id: req.params.id
    }, function (err, diary) {
        if (err) {
            throw err;
        }

        res.json({
            status: true,
            res: diary
        });
    });
});

// create new diary

router.post("/create", function (req, res) {
    new Diary({
        user: req.user._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        img: req.body.img,
        gender:  req.body.gender,
        height: req.body.height,
        weight: req.body.weight,
        date: {
            month: req.body.date.month,
            day: req.body.date.day,
            year: req.body.date.year
        },
        activity: req.body.activity,
        calories: req.body.calories
    }).save(function (err, diary) {
        if (err) {
            throw err;
        }

        User.findOne({ _id: req.user._id}, function (err, user) {
            if (err) {
                throw err;
            }
            user.diaries.push(diary);
            user.save(function (err, user) {
                if (err) {
                    throw err;
                }

                res.json({
                    status: true,
                    res: diary
                });
            });
        });

    });
});


//change diary by id

router.post("/:id", function (req, res) {
    Diary.findByIdAndUpdate(req.params.id, {
        $set: {
            user: req.body._id || user,
            img: req.body.img || img,
            firstName: req.body.firstName || firstName,
            lastName: req.body.lastName || lastName,
            gender:  req.body.gender || gender,
            height: req.body.height || height,
            weight: req.body.weight || weight,
            date: {
                    month: req.body.date.month,
                    day: req.body.date.day,
                    year: req.body.date.year
                } || date,
            activity: req.body.activity ||  activity,
            calories: req.body.calories ||  calories
        }
    }, function (err, diary) {
        if (err) {
            throw err;
        }

        res.json({
            status: true,
            res: diary
        });

    });
});

module.exports = router;
