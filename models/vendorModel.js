
const { where } = require("sequelize")
const {models} = require("./index")

module.exports = {
    createVendor : async(body)=>{
     try{
     const NewVendor = await models.VendorTable.create({...body})
     return {
        response : NewVendor
     }
     }catch(error){
      return{ 
        error : error.errors[0].message 
    }
     }
    } ,
    getAll : async()=>{
        try{
        const NewVendor = await models.VendorTable.findAll()
        return {
           response : NewVendor
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       } ,
       UpdateVendor : async({username, ...body})=>{
        try{
        const Updaterecord = await models.VendorTable.update(
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
       DeleteVendor : async({username})=>{
        try{
        const DeleteVendor = await models.VendorTable.destroy(
            {where : {username : username}}
        )
        return {
           response : DeleteVendor
        }
        }catch(error){
         return{ 
           error : error.errors[0].message 
       }
        }
       }
}