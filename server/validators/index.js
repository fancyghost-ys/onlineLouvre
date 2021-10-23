const {validationResult } = require('express-validator')

exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error: "Make sure your password is correct and others element not empty"});
    }
    next()
}

