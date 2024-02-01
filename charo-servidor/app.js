require('dotenv').config()
require('./db')
const picRoutes = require('./routes/pictureRoutes')
const express = require('express')


const app = express()
app.use(express.json())

 require('./routes')(app)

app.listen(5005, () => {
    console.log('server running on port 5005')
})

module.exports = app

