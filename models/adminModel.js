
const { where } = require("sequelize")
const {models} = require("./index")

module.exports = {
    createAdmin : async(body)=>{
     try{
     const NewAdmin = await models.AdminTable.create({...body})
     return {
        response : NewAdmin
     }
     }catch(error){
      return{ 
        error : error.errors[0].message 
    }
     }
    } ,
    getAll : async()=>{
        try{
        const NewAdmin = await models.AdminTable.findAll()
        return {
           response : NewAdmin
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       } ,
       UpdateAdmin : async({username, ...body})=>{
        try{
        const Updaterecord = await models.AdminTable.update(
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
       DeleteAdmin : async({username})=>{
        try{
        const DeleteAdmin = await models.AdminTable.destroy(
            {where : {username : username}}
        )
        return {
           response : DeleteAdmin
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       }
}