module.exports =(res ,data)=> {
    try{
     res.send({
       code : 200 ,
       data : data
     })
    }catch(error){
       res.send({
          code : 400 ,
          error : error
        })
    
    }
 }