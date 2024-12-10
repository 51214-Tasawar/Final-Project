const routes = require("express").Router() ;
const {Createadmin} = require("../Controller/admincontroller");

routes.get("/createAdmin" , Createadmin);

module.exports = routes ;