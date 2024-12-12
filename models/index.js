const AdminTable  = require("./Tables/admin") ;
const VendorTable = require("./Tables/vendor") 
const CustomerTable = require ("./Tables/customer")

const Vendors = require("./definations/vendors")
const products = require("./definations/products")
const productsverations = require("./definations/productverations")
const variationHasAttributes = require("./definations/variationHasAttributes")
const attributes = require("./definations/attributes")

const sequelize = require("../dbconnection")

const models = {AdminTable , VendorTable , CustomerTable } 

const db = {};

db.sequelize = sequelize ;
sequelize.models = models ;

module.exports = {db , models}