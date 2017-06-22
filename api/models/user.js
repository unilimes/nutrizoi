var bcrypt = require("bcrypt-nodejs");
var Sequelize = require('sequelize');
var sequelize = require("../config/mysql");

var User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
           isEmail: true
        },
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
      type: Sequelize.STRING
    }
},{
    tableName: 'user',
    instanceMethods: {
        generateHash: function(password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
        }
    }
});


User.beforeCreate(user => {
    user.password = user.generateHash(user.password);
});


module.exports = User;
