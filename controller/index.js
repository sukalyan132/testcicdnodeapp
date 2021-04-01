const express = require("express");
var AWS = require("aws-sdk");
// /***********************************************************************/

const router = express.Router();
// var DB = new AWS.DynamoDB.DocumentClient();
// dotenv.config();
const USERS_URL = process.env.USERS_URL;

/************************get product by category***********************************************/
const testfun= async(req,res) =>{
  	res.json({"status":"success"});

};
/*************************************************************************** */
const testfun2= async(req,res) =>{
	console.log(req.params);
	res.json({"status":req.params.id,"url":USERS_URL});

};
/***********************************************************************/

router.get("/list", testfun);
router.get("/list/:id", testfun2);


/************************************************************************/
module.exports = router;
