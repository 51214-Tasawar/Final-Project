const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler")


const {hash} = require("bcrypt")
const {v4 : vendorId} = require("uuid")

module.exports ={
    createvendor:async(req , res)=>{
        try{
          req.body.vendorId = vendorId()
          req.body.password = await hash(req.body.password , 10)
        return responseHandler(res , req.body)
         }catch(error){
           return errorHandler(res , error)
         }
   },
   getvendor:(req , res)=>{
    try{
    return responseHandler(res , req.query)
     }catch(error){
    return errorHandler(res , error)
     }
   },
   updatevendor: async(req , res)=>{
    try{
      req.body.password = await hash(req.body.password , 10)
    return responseHandler(res , req.body)
     }catch(error){
     return errorHandler(res , error)
     }
   },
      deletevendor:(req , res)=>{
        try{
            return responseHandler(res , req.query)
         }catch(error){
            return errorHandler(res , error)
         }
   }
   }