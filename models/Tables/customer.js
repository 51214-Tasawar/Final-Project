const {DataTypes , Model} = require("sequelize")

const sequelize = require("../../dbconnection")

class CustomerTable extends Model { }

CustomerTable.init({
    customerId : {
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
    name : "CustomerTable" ,
    paranoid : true ,
    timestamps : true ,
    sequelize : sequelize
})

module.exports = CustomerTable ;