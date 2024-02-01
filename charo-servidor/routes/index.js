
module.exports = app => {
    const picRoutes = require('./pictureRoutes')
    app.use('/pic', picRoutes )
}

