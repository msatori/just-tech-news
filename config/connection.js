require('dotenv').config();
//import Sequilize constructor from library
const Sequilize = require('sequelize');

//create connection to datbase and pass in MWSQL info 
const sequelize = new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {

    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;