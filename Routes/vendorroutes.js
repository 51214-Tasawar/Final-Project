const newrout = require("express").Router()

const {createvendor
     , getvendor ,
      updatevendor,
    deletevendor } = require("../Controller/vendorcontroller")

newrout.post("/createvendor" , createvendor);
newrout.get("/getvendor" , getvendor);
newrout.patch("/updatevendor" , updatevendor);
newrout.deletevendor("/deletevendor" , deletevendor)

module.exports = newrout