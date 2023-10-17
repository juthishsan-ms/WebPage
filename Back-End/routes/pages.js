var express = require('express');
var router = express.Router();
const userController = require("../controllers/users");

router.get("/login.html", (req,res)=>{
  res.render("login");
})

router.get("/register.html", (req,res)=>{
  res.render("register");
})

router.get(["/","/home.html"], (req,res)=>{
  res.render("home");
})

router.get("/products.html", (req,res)=>{
  res.render("products");
})

router.get("/contact.html", (req,res)=>{
  res.render("contact");
})

/*router.get(["/","/home.html"], userController.isLoggedIn, (req,res)=>{
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login.html");
  }
})

/*router.get("/products.html", userController.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("products", { user: req.user });
  } else {
    res.redirect("/login.html");
  }
})*/

router.get("/account.html", userController.isLoggedIn, (req,res)=>{
  if (req.user) {
    res.render("account", { user: req.user });
  } else {
    res.redirect("/login.html");
  }
})

router.get("/cart.html", userController.isLoggedIn, (req,res)=>{
  if (req.user) {
    res.render("cart", { user: req.user });
  } else {
    res.redirect("/login.html");
  }
})

module.exports = router;
