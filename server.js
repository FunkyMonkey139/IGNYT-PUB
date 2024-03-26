const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: 'http://localhost:3000',
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors(corOptions))

const reserverouter = require('./routers/reservationRouter')
app.use('/api/reservations', reserverouter)
const addrouter = require('./routers/addFoodRouter')
app.use('/api/addFood', addrouter)
const displayrouter = require('./routers/showDishesRouter')
app.use('/api/displayDish', displayrouter)



app.get('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

const PORT = process.env.PORT || 8008

//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))