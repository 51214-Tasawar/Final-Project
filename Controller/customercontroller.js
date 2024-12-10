module.exports ={
    createcustomer:(req , res)=>{
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
   getcustomer:(req , res)=>{
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
   updatecustomer:(req , res)=>{
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
      deletecustomer:(req , res)=>{
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