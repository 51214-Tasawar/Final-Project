const custroutes = require("express").Router()

const {
    createcustomer ,
    getcustomer ,
    updatecustomer ,
    deletecustomer
} = require("../Controller/customercontroller") ;

custroutes.post("/createcustomer" , createcustomer);
custroutes.get("/getcustomer" , getcustomer);
custroutes.patch("/updatecustomer" , updatecustomer);
custroutes.delete("/deletecutomer" , deletecustomer) 

module.exports = custroutes ;