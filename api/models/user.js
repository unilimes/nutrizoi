var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Schema = mongoose.Schema;
var Types = mongoose.Schema.Types;

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    diaries: [ { type: Types.ObjectId, ref: 'Diary'} ],
    token: {
        type: Types.String
    }
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.pre("save", function (next) {
    if (this.isModified("password") || this.isNew) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    }

    next();
});

module.exports = mongoose.model("User", userSchema);
