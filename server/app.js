const express = require('express')
const mongoose = require('mongoose')
const morgan= require('morgan')
const bodyParser =require('body-parser')
const cors = require('cors')
const config= require('./config/app')

// import routes
const router = require('./router')
// app
const app = express()

// db
mongoose.connect(config.dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology: true ,
    dbName:'louvre'
})
  .then(() => console.log('Database Connected ....'))
  .catch((err) => console.log(err))

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors())
// app.use(authJwt())
app.use(router)
app.use('/public/upload',express.static(__dirname+ '/public/upload'))
app.listen(config.appPort,()=> {
    console.log(`Server is running now on ${config.appUrl}:${config.appPort}`)
})


