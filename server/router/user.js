const express = require('express');
const router = express.Router();
const {getAllUsers} = require('../controllers/userController')
const {requireSignin,isAuth,isMMstaff} = require('../helpers/rbac')

router.get('/All',[requireSignin,isAuth,isMMstaff],getAllUsers)


module.exports = router


