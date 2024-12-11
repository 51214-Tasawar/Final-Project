module.exports =(res ,error)=> {
   
    try{
     res.send({
       code : 400 ,
       error : error.message
     })
    }catch(error){
       res.send({
          code : 400 ,
          error : error
        })
    
    }
 }