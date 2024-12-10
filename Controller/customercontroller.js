const responseHandler = require("../responseHandler")
const errorHandler = require("../errorHandler")

const {hash} = require("bcrypt")
const {v4 : customerId} = require("uuid")

module.exports ={
    createcustomer:async(req , res)=>{
        try{
          req.body.customerId = customerId()
          req.body.password = await hash(req.body.password , 10)
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
   updatecustomer:async(req , res)=>{
    try{
      req.body.password = await hash(req.body.password , 10)
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