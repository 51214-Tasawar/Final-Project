const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbconnection")
const VendorTable = require("./vendor")

class products extends Model { } ;

products.init ({
    productId:{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    price:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    vendorId :{
        type: DataTypes.STRING() ,
        allowNull : false, 
        references : {
         model : VendorTable ,
         key : "vendorId"
        }

    }            
},{
    name : "products" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

module.exports = products ; 