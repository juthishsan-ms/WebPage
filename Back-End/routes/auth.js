var express = require('express');
const userController = require("../controllers/users");
var router = express.Router();

router.post('/account',userController.account);
router.post('/login',userController.login);

module.exports = router;
