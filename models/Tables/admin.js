const {DataTypes , Model} = require("sequelize")


const sequelize = require("../../dbconnection")



class AdminTable extends Model { }

AdminTable.init({
    adminId : {
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
    name : "AdminTable" ,
    paranoid : true ,
    timestamps : true ,
   sequelize : sequelize
})

module.exports = AdminTable ;