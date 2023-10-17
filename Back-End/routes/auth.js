var express = require('express');
const userController = require("../controllers/users");
var router = express.Router();

router.post('/register',userController.register);
router.post('/login',userController.login);
router.get('/logout',userController.logout);

module.exports = router;
