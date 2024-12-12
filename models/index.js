const AdminTable  = require("./Tables/admin") ;
const VendorTable = require("./Tables/vendor") 
const CustomerTable = require ("./Tables/customer")

const products = require("./Tables/products")
const productsverations= require("./Tables/productverations")
const variationHasAttributes = require("./Tables/variationHasAttributes")
const attributes = require("./Tables/attributes")

const sequelize = require("../dbconnection")



// Create 1:M Relation while Vendors is Parent

vendors.hasMany(products ,  { foreignKey : "vendorId"})
products.belongsTo(vendors ,  { foreignKey: "vendorId "})

// // product and productveriation 1: M Relationcl

products.hasMany(productsverations , {foreignKey : "productId" , as :"variations"} );
productsverations.belongsTo(products , {foreignKey: "productId",  as : "product"})

// Creating M:M Relation in this method 

// Vendors.belongsToMany(products , {through : "vendorsHasProducts"})
// products.belongsToMany(Vendors , {through : "vendorsHasProducts"})

// Creating Veriation and attribute relation M:M using veriationsHasattributes
productsverations.hasMany(variationHasAttributes ,
     {foreignKey: "productsverationsId"})

variationHasAttributes.belongsTo(productsverations , 
    {foreignKey : "productsverationsId"})

attributes.hasMany(variationHasAttributes , 
    {foreignKey :"attributeId " , as: "attributes"})

variationHasAttributes.belongsTo(attributes , 
    {foreignKey : "attributeId " , as:"attribute"})



const models = {AdminTable , VendorTable , CustomerTable } 

const db = {};

db.sequelize = sequelize ;
sequelize.models = models ;

module.exports = {db , models}