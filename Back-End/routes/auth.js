var express = require('express');
const userController = require("../controllers/users");
var router = express.Router();

router.post('/account',userController.account);

module.exports = router;
