const routes = require("./Routes/adminroutes")

const  express = require("express");


const App = express()

const port = 3001 ;

App.use("/admin" , routes)

App.listen(()=>{
    console.log(`Testing At port  ${port}`)
})

