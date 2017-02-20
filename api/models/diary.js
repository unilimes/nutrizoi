var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Types = mongoose.Schema.Types;

var diarySchema = new Schema({
    user: {
        type: Types.String
    },
    firstName: {
        type: Types.String
    },
    lastName: {
        type: Types.String
    },
    img: {
        type: Types.String
    },
    gender:  {
        type: Types.String
    },
    height: {
        type: Types.Number
    },
    weight: {
        type: Types.Number
    },
    date: {
        month: Types.Number,
        day: Types.Number,
        year: Types.Number
    },
    activity: {
        type: Types.String
    },
    calories: {
        type: Types.Number
    }
});


module.exports = mongoose.model("Diary", diarySchema);