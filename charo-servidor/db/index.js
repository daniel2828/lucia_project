const mongoose = require('mongoose')

const MONGO_URI =
    process.env.MONGODB_URI

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        const dbName = x.connections[0].name
        console.log(`Connected to Mongo DB named ${dbName}`)
    })
    .catch((err) => {
        console.log('Error connecting to Mongo', err)
    })


