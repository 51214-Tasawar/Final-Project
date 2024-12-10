module.exports ={
    createvendor:(req , res)=>{
   console.log(req.body)   
   return res.send("Admin Created");
   },
   getvendor:(req , res)=>{
    return res.send("This My Testing Demo")
   },
   updatevendor:(req , res)=>{
       return res.send("This My Testing Demo")
   },
      deletevendor:(req , res)=>{
       return res.send("This My Testing Demo")
   }
   }