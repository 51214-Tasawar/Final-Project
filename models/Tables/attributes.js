const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbconnection")
const products = require("./products");


class attributes extends Model { } ;

attributes.init ({
    attributeId :{
        primaryKey : true ,
        type : DataTypes.STRING(100),
    },
    attributename:{
        type : DataTypes.STRING(100),
        allowNull : false
    },
    price: {
        unique : true ,
        allowNull:false ,
        type : DataTypes.STRING(100)
    },

},{
    name : "productverations" ,
    timestamps : true ,
    paranoid : true,
    sequelize : sequelize
});

module.exports = attributes ; 
