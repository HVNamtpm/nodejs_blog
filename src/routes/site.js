const express = require('express')
const router= express.Router()

const siteControllers= require('../app/controllers/SiteControllers')

router.use('/search',siteControllers.show)
router.use('/',siteControllers.index)

module.exports= router
