const router = require('express').Router()

router.use('/',require('./auth'))
router.use('/users',require('./user'))
router.use('/arts',require('./art'))


module.exports = router 