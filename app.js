const routes = require("./Routes/adminroutes")

const  express = require("express");
const bodyParser = require("body-parser")


const App = express()

const port = 3005 ;

App.use(bodyParser.urlencoded({ extended: false}))
App.use(bodyParser.json()) 

App.use("/admin" , routes)

App.listen(()=>{
    console.log(`Testing At port  ${port}`)
})

