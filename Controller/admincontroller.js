module.exports ={
 Createadmin:(req , res)=>{
   try{
    res.send(
    {
         status : "ok" ,
        status : 200 ,
        data : req.body
         
     }
   )
   }catch(error){
   console.log(error)
   }
}
}