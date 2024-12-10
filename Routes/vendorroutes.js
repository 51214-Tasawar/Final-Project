const {createvendor
     , getvendor ,
      updatevendor,
    deletevendor } = require("../Controller/vendorcontroller")
const {Create , Update , getDelete} = require("../Validators/uservalidation")

const newrout = require("express").Router();




newrout.post("/createvendor",Create,createvendor);
newrout.get("/getvendor" ,getDelete,getvendor);
newrout.patch("/updatevendor" , Update ,updatevendor);
newrout.delete("/deletevendor" , getDelete,deletevendor)

module.exports = newrout  