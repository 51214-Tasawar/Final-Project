const {DataTypes , Model} = require("sequelize")
const sequelize = require("../../dbconnection")

class VendorTable extends Model { }

VendorTable.init({
    vendorId : {
        primaryKey : true ,
       type : DataTypes.STRING(100)
    },
    name : {
        type : DataTypes.STRING(100),
        allowNull: false
    } ,
    username :{
        unique : true ,
        type :DataTypes.STRING(100),
        allowNull : false
    },
    email :{
   type : DataTypes.STRING(150),
   allowNull: false
    },
    password : {
        type : DataTypes.STRING(100),
        allowNull : false
    }
} ,{
    name : "VendorTable" ,
    paranoid : true ,
    timestamps : true ,
    sequelize : sequelize
})

module.exports = VendorTable ;