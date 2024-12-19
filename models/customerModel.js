
const { where } = require("sequelize")
const {models} = require("./index")

module.exports = {
    createCustomer : async(body)=>{
     try{
     const NewCustomer = await models.CustomerTable.create({...body})
     return {
        response : NewCustomer
     }
     }catch(error){
      return{ 
        error : error.errors[0].message 
    }
     }
    } ,
    getAll : async()=>{
        try{
        const NewAdmin = await models.CustomerTable.findAll({
          attributes:["customerId","name","username","email"]
        })
        return {
           response : NewAdmin
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       } ,
       UpdateCustomer : async({username, ...body})=>{
        try{
        const Updaterecord = await models.CustomerTable.update(
            { ...body },{
                where : {
              username : username
                }
            })
        return {
           response : Updaterecord
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       } ,
       DeleteCustomer : async({username})=>{
        try{
        const Deletecustomer = await models.CustomerTable.destroy(
            {where : {username : username}}
        )
        return {
           response : Deletecustomer
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       }
}