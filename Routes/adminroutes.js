const routes = require("express").Router() ;
const {createadmin ,
    getadmin ,
    updateadmin ,
    deleteadmin
} = require("../Controller/admincontroller");
const {Create , Update , getDelete} = require("../Validators/uservalidation")

routes.post("/createAdmin" , Create ,createadmin);
routes.get("/getadmin" , getDelete, getadmin)
routes.patch("/updateadmin" , Update , updateadmin)
routes.delete("/deleteadmin" ,  getDelete ,deleteadmin)

module.exports = routes ;