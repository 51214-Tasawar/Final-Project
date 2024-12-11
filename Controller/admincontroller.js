const responseHandler= require("../responseHandler")
const errorHandler = require("../errorHandler")
const {createAdmin,getAll,
    UpdateAdmin ,
    DeleteAdmin } = require("../models/adminModel")
const { hash } = require("bcrypt")
const {v4 : adminId} = require("uuid")

module.exports ={
createadmin: async(req , res)=>{
try{
    req.body.password = await hash(req.body.password , 10)
    req.body.adminId = adminId()
    
   const response =  await createAdmin (req.body)
   if(response.error){
      return errorHandler(res , response.error)
   }
    return responseHandler(res , response.response)
}catch(error){
    return errorHandler(res , error)
}
},
getadmin:async(req , res)=>{
 try{
    const response =  await getAll ()
   if(response.error){
      return errorHandler(res , response.error)
   }
    return responseHandler(res , response.response)
 }catch(error){
 return errorHandler(res , error)
 }
},
updateadmin:async(req , res)=>{
    try{
     req.body.password = await hash(req.body.password , 10)
     const response =  await UpdateAdmin (req.body)
     if(response.error){
        return errorHandler(res , response.error)
     }
      return responseHandler(res , response.response)
    }catch(error){
    return errorHandler(res , error)
    }
},
   deleteadmin:async(req , res)=>{
   try{
    const response =  await DeleteAdmin (req.query)
    if(response.error){
       return errorHandler(res , response.error)
    }
     return responseHandler(res , response.response)
   }catch(error){
    return errorHandler(res , error)
   }
}
}