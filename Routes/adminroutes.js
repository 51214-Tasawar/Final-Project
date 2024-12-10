const routes = require("express").Router() ;
const {Createadmin} = require("../Controller/admincontroller");

routes.post("/createAdmin" , Createadmin);

module.exports = routes ;