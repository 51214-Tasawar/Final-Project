const responseHandler= require("../responseHandler")
const errorHandler = require("../errorHandler")

module.exports ={
createadmin:(req , res)=>{
try{
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
updateadmin:(req , res)=>{
    try{
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