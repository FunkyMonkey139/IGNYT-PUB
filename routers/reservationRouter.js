const reservationController = require('../controllers/reservationController')
const router = require('express').Router()

router.post('/reserve', reservationController.reserve)

module.exports = router