const responseHandler= require("../responseHandler")
const errorHandler = require("../errorHandler")

const { hash } = require("bcrypt")
const {v4 : adminId} = require("uuid")

module.exports ={
createadmin: async(req , res)=>{
try{
    req.body.password = await hash(req.body.password , 10)
    req.body.adminId = adminId()
    return responseHandler(res , req.body)
}catch(error){
    return errorHandler(res , error)
}
},
getadmin:(req , res)=>{
 try{
 return responseHandler(res , req.query)
 }catch(error){
 return errorHandler(res , error)
 }
},
updateadmin:async(req , res)=>{
    try{
        req.body.password = await hash(req.body.password , 10)
    return responseHandler(res , req.body)
    }catch(error){
    return errorHandler(res , error)
    }
},
   deleteadmin:(req , res)=>{
   try{
    return responseHandler(res , req.query)
   }catch(error){
    return errorHandler(res , error)
   }
}
}