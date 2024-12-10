const routes = require("express").Router() ;
const {createadmin ,
    getadmin ,
    updateadmin ,
    deleteadmin
} = require("../Controller/admincontroller");

routes.post("/createAdmin" , createadmin);
routes.get("/getadmin" , getadmin)
routes.patch("/updateadmin" , updateadmin)
routes.delete("/deleteadmin" , deleteadmin)

module.exports = routes ;