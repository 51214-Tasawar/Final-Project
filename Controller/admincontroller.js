module.exports ={
 createadmin:(req , res)=>{
try{
    
   return res.send(
    {
        status : "Ok" ,
        code : 200 ,
        data : req.body
    }
   )
}catch(error){
   res.send({
    status : "Not Ok" ,
    code : 400 ,
    data : {}
   })
}
},
getadmin:(req , res)=>{
 try{
    return res.send(
        {
            status : "Ok" ,
            code : 200 ,
            data : req.query
        }
       )
 }catch(error){
    res.send({
        status : "Not Ok" ,
        code : 400 ,
        data : {}
       })
 }
},
updateadmin:(req , res)=>{
    try{
        return res.send(
            {
                status : "Ok" ,
                code : 200 ,
                data : req.body
            }
           )
    }catch(error){
        res.send({
            status : "Not Ok" ,
            code : 400 ,
            data : {}
           })
    }
},
   deleteadmin:(req , res)=>{
   try{
    return res.send(
        {
            status : "Ok" ,
            code : 200 ,
            data : req.query
        }
       )
   }catch(error){
    res.send({
        status : "Not Ok" ,
        code : 400 ,
        data : {}
       })
   }
}
}