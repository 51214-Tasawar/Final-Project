const {DataTypes , Model} = require("sequelize")

class CustomerTable extends Model { }

CustomerTable.init({
    CustomerId : {
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

})

module.exports = CustomerTable ;