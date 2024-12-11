const routes = require("./Routes/adminroutes")
const newrout = require("./Routes/vendorroutes")
const custroutes = require("./Routes/customerroutes");
const {db} = require("./models/index")

const bodyParser = require("body-parser");
const  express = require("express");




const App = express()

const port = 3006;

App.use(bodyParser.urlencoded({ extended: false}))
App.use(bodyParser.json()) 

App.use("/admin" , routes)
App.use("/verdor" , newrout)
App.use("/customer" , custroutes)




App.listen(port ,()=>{
    console.log(`Testing At port  ${port}`)
})
db.sequelize.sync({alter:true, logging:false}).then(()=>{
    console.log("Connected")
}).catch(()=>{
  console.log("Giving Error")
})

