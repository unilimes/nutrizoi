var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Types = mongoose.Schema.Types;

var daySchema = new Schema({
    user: {
        type: Types.String
    },
    diary: {
        type: Types.String
    },
    timestamp: {
        type: Types.Number
    },
    breakfast: [ { type: Types.ObjectId, ref: 'Recipe'} ],
    lunch: [ { type: Types.ObjectId, ref: 'Recipe'} ],
    dinner: [ { type: Types.ObjectId, ref: 'Recipe'} ],
    snack: [ { type: Types.ObjectId, ref: 'Recipe'} ],
    calories: {
        type: Types.Number
    },
    macro: {
        type: Types.Number
    },
    micro: {
        type: Types.Number
    }
});


module.exports = mongoose.model("Day", daySchema);