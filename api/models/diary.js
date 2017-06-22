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



var Sequelize = require('sequelize');
var sequelize = require("../config/mysql");
var User = require("./user");

var Diary = sequelize.define('diary', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    user: {
        type: Sequelize.INTEGER,
        references: 'user',
        referencesKey: 'id'
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    gender:  {
        type: Sequelize.STRING
    },
    height: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.INTEGER
    },
    date: {
        month: Types.Number,
        day: Types.Number,
        year: Types.Number
    },
    activity: {
        type: Sequelize.STRING
    },
    calories: {
        type: Sequelize.INTEGER
    }
});


User.hasMany(Diary);

module.exports = Diary;