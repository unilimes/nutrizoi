var hbs = require("hbs");
var path = require("path");
var http = require("http");
var morgan = require("morgan");
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var busboy = require("connect-busboy");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var routes = require("./routes");
var config = require("./config");
var app = express();
var server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3002);

/**
 * Normalize a port into a number, string, or false.
 **/
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}


hbs.localsAsTemplateData(app);
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.set("view options", {
    layout: "layout"
});

app.use(morgan("dev"));

app.use(favicon(path.join(__dirname, "../dist", "favicon.ico")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use(busboy());

app.use(cookieParser());

app.use(bodyParser.urlencoded({limit: "50mb",extended: false}));
app.use(bodyParser.json({limit: "50mb"}));

app.use(session({
    secret: "g45t483u4hr29ehwduigfeuthei434",
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});

server.on("listening", function () {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;

    console.log("Listening on " + bind);
});

server.on("error", function (error) {
    if (error.syscall !== "listen") throw error;

    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
});

server.listen(port);

require("./config/passport")(passport);
