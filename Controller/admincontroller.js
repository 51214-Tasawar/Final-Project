module.exports ={
 Createadmin:(req , res)=>{
   try{
    res.send(
    {
         status : "ok" ,
        data : req.body
         
     }
   )
   }catch(error){
   console.log(error)
   }
}
}