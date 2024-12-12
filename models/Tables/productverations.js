const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbconnection")
const products = require("./products");


class productverations extends Model { } ;

productverations.init ({
    productverationId :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    productname:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    price: {
        unique : true ,
        allowNull:false ,
        type : DataTypes.STRING(100)
    },
    Quentity:{
   type :DataTypes.STRING(1000),
   allowNull : true
    } ,
    productId : {
        type : DataTypes.STRING() ,
        allowNull : false ,
        references :{
            model : products ,
            key : "productId"
        }
    }
},{
    name : "productverations" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

module.exports = productverations ; 
