const AdminTable  = require("./Tables/admin") ;
const VendorTable = require("./Tables/vendor") 
const CustomerTable = require ("./Tables/customer")

const sequelize = require("../dbconnection")

const models = {AdminTable , VendorTable , CustomerTable } 

const db = {};

db.sequelize = sequelize ;
sequelize.models = models ;

module.exports = {db , models}