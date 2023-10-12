var express = require('express');
var router = express.Router();
const userController = require("../controllers/users");

router.get(["/","/home.html"], userController.isLoggedIn, (req,res)=>{
  //console.log(req.name);
  if (req.user) {
    res.render("index", { user: req.user });
  } else {
    res.redirect("/account");
  }
})

router.get("/account.html", (req,res)=>{
  res.render("account");
})

router.get("/products.html", (req,res)=>{
  res.render("products");
})

module.exports = router;
