//import libraries var
var express = require("express");
var app = express();
var port = process.env.PORT || 8080; // set our port

//import configs const
const db = require("./config/sequelize");

var router = express.Router();

router.post("/test", (req: any, res: any, next: any) => {
  //test regex
});
