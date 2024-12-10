const responseHandler = require("../responseHandler")
const errorHandler = require("../errorHandler")

module.exports ={
    createcustomer:(req , res)=>{
        try{
         return responseHandler(res , req.body)
         }catch(error){
         return errorHandler(res , error)
         }
   },
   getcustomer:(req , res)=>{
    try{
    return responseHandler(res , req.query)
     }catch(error){
    return errorHandler(res , error)
     }
   },
   updatecustomer:(req , res)=>{
    try{
    return responseHandler(res , req.body)
     }catch(error){
    return errorHandler(res , error)
     }
   },
      deletecustomer:(req , res)=>{
        try{
       return responseHandler(res , req.query)
         }catch(error){
        return errorHandler(res , error)
         }
   }
   }