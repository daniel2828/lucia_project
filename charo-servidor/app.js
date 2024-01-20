const express = require('express')
const app = express()
require('./db')

app.get('/', (req, res) => {
    res.send('SERVIDOR CHAyyyyyRO')
})


app.listen(5005, () => {
    console.log('server running on port 5005')
})