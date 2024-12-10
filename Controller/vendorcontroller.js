module.exports ={
    createvendor:(req , res)=>{
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
   getvendor:(req , res)=>{
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
   updatevendor:(req , res)=>{
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
      deletevendor:(req , res)=>{
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