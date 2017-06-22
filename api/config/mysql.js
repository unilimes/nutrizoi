var Sequelize = require("sequelize");
// var config = require("../config").mysql[(process.env.NODE_ENV || "dev")];
var config = require("../config").mysql;

var sequelize = new Sequelize(config.dbName, config.userName, config.dbPass, {
    host: config.dbHost,
    dialect: 'mysql',
    pool: {
    max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});



//     new Sequelize((process.env.DATABASE_URL || config.uri), {
//     define: {
//         timestamps: false
//     },
//     dialectOptions: {
//         password: config.password
//     }
// });


module.exports = sequelize;
