const responseHandler = require("../responseHandler")
const errorHandler = require("../errorHandler")
const {
  createCustomer , 
  getAll ,
  UpdateCustomer ,
  DeleteCustomer } = require("../models/customerModel")
const {hash} = require("bcrypt")
const {v4 : customerId} = require("uuid")

module.exports ={
    createcustomer:async(req , res)=>{
        try{
          req.body.customerId = customerId()
          req.body.password = await hash(req.body.password , 10)

          const response =  await createCustomer (req.body)
          if(response.error){
             return errorHandler(res , response.error)
          }
           return responseHandler(res , response.response)
         }catch(error){
         return errorHandler(res , error)
         }
   },
   getcustomer:async(req , res)=>{
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
   updatecustomer:async(req , res)=>{
    try{
      req.body.password = await hash(req.body.password , 10)

      const response =  await UpdateCustomer (req.body)
      if(response.error){
         return errorHandler(res , response.error)
      }
       return responseHandler(res , response.response)

     }catch(error){
    return errorHandler(res , error)
     }
   },
      deletecustomer:async(req , res)=>{
        try{

          const response =  await DeleteCustomer (req.query)
          if(response.error){
             return errorHandler(res , response.error)
          }
           return responseHandler(res , response.response)

         }catch(error){
        return errorHandler(res , error)
         }
   }
   }