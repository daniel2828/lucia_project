const mongoose = require('mongoose')

const MONGO_URI =
    process.env.MONGODB_URI
 //porque esa url y no esta : mongodb://localhost:27017

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        const dbName = x.connections[0].name
        console.log(`Connected to Mongo DB named ${dbName}`)
    })
    .catch((err) => {
        console.log('Error connecting to Mongo', err)
    })



// todo parece ok pero no me crea la coleccion en mongodb