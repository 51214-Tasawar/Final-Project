module.exports ={
 createadmin:(req , res)=>{
console.log(req.body)   
return res.send("Admin Created");
},
getadmin:(req , res)=>{
 return res.send("This My Testing Demo")
},
updateadmin:(req , res)=>{
    return res.send("This My Testing Demo")
},
   deleteadmin:(req , res)=>{
    return res.send("This My Testing Demo")
}
}