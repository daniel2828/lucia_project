require('dotenv').config()
require('./db')
const cors = require('cors')
const express = require('express')


const app = express()

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }))

app.use(express.json())

 require('./routes')(app)

app.listen(5005, () => {
    console.log('server running on port 5005')
})

module.exports = app

