const {body} = require('express-validator');

exports.rules = (()=>{
    return[
        body('userName').notEmpty(),
        body("password", "Password length at least 8 and contian (Numbers, Captial/small Letters, regular expression) ").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]/)    ]
})()
