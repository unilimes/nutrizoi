var router = require("express").Router();


router.get("/", function (req, res) {
    return res.json({
        status: true,
        res: []
    });
});

//get by id
router.get("/:id", function (req, res) {
    var recipe = {
        _id: '345eve34c1',
        title: req.params.id + '1',
        images: ["./assets/resources/images/search/instagram1.jpg",
            "./assets/resources/images/search/instagram1.jpg",
            "./assets/resources/images/search/instagram1.jpg",
            "./assets/resources/images/search/instagram1.jpg"],
        source: 'http://www.website.com/hamburger'
    };

    return res.json({
        status: true,
        res: recipe
    });
});

//get by title name
router.get("/title/:id", function (req, res) {
    var recipes = [
        {
            _id: '345eve34c1',
           title: req.params.id + '1',
            images: ["./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg"],
            source: 'http://www.website.com/hamburger'
        },
        {
            _id: '345eve34c2',
            title: req.params.id + '2',
            images: ["./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg"],
            source: 'http://www.website.com/hamburger'
        },
        {
            _id: '345eve34c3',
            title: req.params.id + '3',
            images: ["./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg"],
            source: 'http://www.website.com/hamburger'
        },
        {
            _id: '345eve34c4',
            title: req.params.id + '4',
            images: ["./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg",
                "./assets/resources/images/search/instagram1.jpg"],
            source: 'http://www.website.com/hamburger'
        }
    ];

    return res.json({
        status: true,
        res: recipes
    });
});


//save new recipe
router.post("/save", function (req, res) {
    console.log(req.body);
    return res.json({
        status: false,
        res: req.body
    });
});

module.exports = router;
