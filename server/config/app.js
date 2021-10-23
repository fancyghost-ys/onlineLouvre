require('dotenv').config()

module.exports ={
    appUrl: process.env.APP_URL,
    appPort: process.env.APP_PORT,
    dbUrl: process.env.DBAPI_URL,
    JwtSecret:process.env.SECRET
}

