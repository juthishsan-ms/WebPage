const mysql = require("mysql");

exports.account = (req,res)=>{
    console.log(req.body);
    res.send("Form submitted");
};