
const {models} = require("./index")

module.exports = {
    createAdmin : async(body)=>{
     try{
     const NewAdmin = await models.AdminTable.create({...body})
     return {
        response : NewAdmin
     }
     }catch(error){
      return{ 
        error : error 
    }
     }
    }
}