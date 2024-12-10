const joi = require("joi") ;

const createSchema = joi.object (
    {
        name : joi.string().min(6).max(50) ,
        email : joi.string().min(8).max(50) ,
       usernam : joi.string().min(6).max(10).required(),
       password :joi.string().min(6).max(1000)
    } 
)

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
    }
}
