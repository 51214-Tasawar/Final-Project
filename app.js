const routes = require("./Routes/adminroutes")
const newrout = require("./Routes/vendorroutes")

const  express = require("express");
const bodyParser = require("body-parser");
const custroutes = require("./Routes/customerroutes");


const App = express()

const port = 3005 ;

App.use(bodyParser.urlencoded({ extended: false}))
App.use(bodyParser.json()) 

App.use("/admin" , routes)
App.use("/verdor" , newrout)
App.use("/customer" , custroutes)

App.listen(()=>{
    console.log(`Testing At port  ${port}`)
})

