const reservationController = require('../controllers/addFoodController')
const router = require('express').Router()

router.post('/addAppetizer', reservationController.addAppetizer)
router.post('/addBarbite', reservationController.addBarbites)
router.post('/addBeer', reservationController.addBeers)
router.post('/addBread', reservationController.addBread)
router.post('/addDessert', reservationController.addDessert)
router.post('/addEgg', reservationController.addEgg)
router.post('/addLivebbq', reservationController.addLiveBBQ)
router.post('/addMains', reservationController.addMain)
router.post('/addMilkshake', reservationController.addMilkshake)
router.post('/addNoodles', reservationController.addNoodles)
router.post('/addPasta', reservationController.addPasta)
router.post('/addPizza', reservationController.addPizza)
router.post('/addPlatter', reservationController.addPlatter)
router.post('/addRice', reservationController.addRice)
router.post('/addSalad', reservationController.addSalad)
router.post('/addSandwich', reservationController.addSandwich)
router.post('/addSoup', reservationController.addSoup)
router.post('/addTandoori', reservationController.addTandoori)


module.exports = router