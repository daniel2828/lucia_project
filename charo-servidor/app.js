const express = require('express')
require('dotenv').config()
const UserModel = require('./models/Users')
const app = express()
require('./db')



app.get('/', (req, res) => {
    res.send('SERVIDOR CHARO')
    UserModel.create({userName: "Daniel"})
})


app.listen(5005, () => {
    console.log('server running on port 5005')
})