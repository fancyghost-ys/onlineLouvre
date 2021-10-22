const express = require('express');
const router = express.Router();
const {signUp,signIn,signOut} = require('../controllers/authController')
const {validate} = require('../validators')
const { rules : SignupRules } = require('../validators/auth/signUp')
const { rules : SigninRules } = require('../validators/auth/signin')

router.post('/Signup',[SignupRules,validate], signUp)
router.post('/SignIn',[SigninRules,validate], signIn)
router.get('/Signout',signOut)
module.exports = router


