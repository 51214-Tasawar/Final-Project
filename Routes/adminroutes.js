const routes = require("express").Router() ;
const {createadmin ,
    getadmin ,
    updateadmin ,
    deleteadmin
} = require("../Controller/admincontroller");
const {Create} = require("../Validators/uservalidation")

routes.post("/createAdmin" , Create ,createadmin);
routes.get("/getadmin" , getadmin)
routes.patch("/updateadmin" , updateadmin)
routes.delete("/deleteadmin" , deleteadmin)

module.exports = routes ;