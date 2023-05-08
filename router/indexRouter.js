const router = require('express').Router()

const PhotoController = require('../controller/photoController')

router.get('/photos', PhotoController.GetAllPhotos)

module.exports = router