const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbconnection")
const VendorTable = require("./vendor")

class products extends Model { } ;

products.init ({
    productId:{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    name:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    username: {
        unique : true ,
        allowNull:false ,
        type : DataTypes.STRING(100)
    },
    password:{
   type :DataTypes.STRING(1000),
   allowNull : true
    } ,
    email :{
        type : DataTypes.STRING(100),
        allowNull: false ,
        defaultValue : " " 
    } , 
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