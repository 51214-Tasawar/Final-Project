const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler")
const {createVendor ,
  getAll , 
  UpdateVendor ,
  DeleteVendor
} = require("../models/vendorModel")

const {hash} = require("bcrypt")
const {v4 : vendorId} = require("uuid")

module.exports ={
    createvendor:async(req , res)=>{
        try{
          req.body.vendorId = vendorId()
          req.body.password = await hash(req.body.password , 10)

          const response =  await createVendor (req.body)
          if(response.error){
             return errorHandler(res , response.error)
          }
           return responseHandler(res , response.response)
           
         }catch(error){
           return errorHandler(res , error)
         }
   },
   getvendor:async(req , res)=>{
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
   updatevendor: async(req , res)=>{
    try{
      req.body.password = await hash(req.body.password , 10)

      const response =  await UpdateVendor (req.body)
      if(response.error){
         return errorHandler(res , response.error)
      }
       return responseHandler(res , response.response)

     }catch(error){
     return errorHandler(res , error)
     }
   },
      deletevendor:async(req , res)=>{
        try{

          const response =  await DeleteVendor (req.query)
          if(response.error){
             return errorHandler(res , response.error)
          }
           return responseHandler(res , response.response)

         }catch(error){
            return errorHandler(res , error)
         }
   }
   }