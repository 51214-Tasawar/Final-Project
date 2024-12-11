const AdminTable  = require("./Tables/admin") ;

const sequelize = require("../dbconnection")

const models = {AdminTable} 

const db = {};

db.sequelize = sequelize ;
sequelize.models = models ;

module.exports = {db , models}