const reservationController = require('../controllers/showDishesController')
const router = require('express').Router()

router.get('/showAppetizer', reservationController.showAppetizer)
router.get('/showBarbite', reservationController.showBarbites)
router.get('/showBeer', reservationController.showBeers)
router.get('/showBread', reservationController.showBread)
router.get('/showDessert', reservationController.showDessert)
router.get('/showEgg', reservationController.showEgg)
router.get('/showLivebbq', reservationController.showLiveBBQ)
router.get('/showMains', reservationController.showMain)
router.get('/showMilkshake', reservationController.showMilkshake)
router.get('/showNoodles', reservationController.showNoodles)
router.get('/showPasta', reservationController.showPasta)
router.get('/showPizza', reservationController.showPizza)
router.get('/showPlatter', reservationController.showPlatter)
router.get('/showRice', reservationController.showRice)
router.get('/showSalad', reservationController.showSalad)
router.get('/showSandwich', reservationController.showSandwich)
router.get('/showSoup', reservationController.showSoup)
router.get('/showTandoori', reservationController.showTandoori)


module.exports = router