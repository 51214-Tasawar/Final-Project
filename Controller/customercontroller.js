module.exports ={
    createcustomer:(req , res)=>{
   console.log(req.body)   
   return res.send("Admin Created");
   },
   getcustomer:(req , res)=>{
    return res.send("This My Testing Demo")
   },
   updatecustomer:(req , res)=>{
       return res.send("This My Testing Demo")
   },
      deletecustomer:(req , res)=>{
       return res.send("This My Testing Demo")
   }
   }