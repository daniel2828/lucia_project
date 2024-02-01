const express = require('express')

const router = express.Router()

const PictureModel = require('../models/PictureModel')




router.post('/', (req, res, next) => {

    const { PictureName, PictureDescription, PictureImg } = req.body
    
    PictureModel
        .create({ PictureName, PictureImg, PictureDescription })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

module.exports = router