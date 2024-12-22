const custroutes = require("express").Router()

const {
    createcustomer ,
    getcustomer ,
    updatecustomer ,
    deletecustomer
} = require("../Controller/customercontroller") ;

const {Create , Update , getDelete} = require("../Validators/uservalidation")




custroutes.post("/createcustomer" , Create ,createcustomer);
custroutes.get("/getcustomer" ,getcustomer);
// custroutes.get("/getcustomer" , getDelete,getcustomer); Create Function to Get One Customer
custroutes.patch("/updatecustomer" , Update, updatecustomer);
custroutes.delete("/deletecutomer" , getDelete ,deletecustomer) 

module.exports = custroutes ;