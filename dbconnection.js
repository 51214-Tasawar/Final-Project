require("dotenv").config();

const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    host : process.env.DBHOST ,
    username : process.env.DBUSERNAME ,
    password: process.env.DBPASSORD ,
    database : process.env.DBNAME ,
    port : process.env.DBPORT,
    dialect : process.env.DBDIALECT
})

module.exports = sequelize ;