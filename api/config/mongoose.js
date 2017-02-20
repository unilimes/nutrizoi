var mongoose = require("mongoose");

var config = require("../config");

module.exports = function () {
    return mongoose.connect(config.mongoose.uri);
};
