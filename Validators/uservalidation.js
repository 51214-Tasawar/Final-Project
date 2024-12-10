const {} = require("../errorHandler")


const joi = require("joi") ;

const createSchema = joi.object (
    {
        name : joi.string().min(6).max(50) ,
        email : joi.string().min(8).max(50) ,
       usernam : joi.string().min(6).max(10).required(),
       password :joi.string().min(6).max(1000).required()
    } 
)

const UpdateSchema = joi.object({
    name : joi.string().min(6).max(50) ,
    email : joi.string().min(8).max(50) ,
   usernam : joi.string().min(6).max(20).required(),
   password :joi.string().min(6).max(1000).required()
})

const getDeleteSchema = joi.object({
usernam : joi.string().min(6).max(20).required()
})

module.exports = {
    Create :async(req , res , next)=>{
        try{
        await createSchema.validateAsync(req.body) ;
        next()
        }catch(error){
        return res.send({
                status: "Not Ok",
                code : 400 ,
                error : error.message
         })
        }
    } ,
    Update : async(req , res , next )=>{
    try{
    await  UpdateSchema.validateAsync(req.body)
    next()
    }catch(error){
   res.send({
    status: "Not Ok",
    code : 400 ,
    error : error.message   
   })
    }
    } ,
    getDelete :async(req , res , next)=>{
   try{
    await getDeleteSchema.validateAsync(req.query)
    next()
   }catch(error){
   return res.send({
    status: "Not Ok",
    code : 400 ,
    error : error.message
   })
   }
    }
}
