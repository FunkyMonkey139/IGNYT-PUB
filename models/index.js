const dbConfig = require('../config/databaseConfig')


const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
    logging: false,
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => console.log("ERROR" + err))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.reservations = require("./reservationModel.js")(sequelize, DataTypes)
db.appetizers = require("./appetizersModel.js")(sequelize, DataTypes)
db.barbites = require("./barbitesModel.js")(sequelize, DataTypes)
db.beers = require("./beersModel.js")(sequelize, DataTypes)
db.breads = require("./breadModel.js")(sequelize, DataTypes)
db.desserts = require("./dessertModel.js")(sequelize, DataTypes)
db.eggs = require("./eggModel.js")(sequelize, DataTypes)
db.livebbqs = require("./livebbqModel.js")(sequelize, DataTypes)
db.mains = require("./mainsModel.js")(sequelize, DataTypes)
db.milkshakes = require("./milkshakeModel.js")(sequelize, DataTypes)
db.noodles = require("./noodlesModels.js")(sequelize, DataTypes)
db.pastas = require("./pastaModels.js")(sequelize, DataTypes)
db.pizzas = require("./pizzaModel.js")(sequelize, DataTypes)
db.platters = require("./platterModel.js")(sequelize, DataTypes)
db.rices = require("./riceModel.js")(sequelize, DataTypes)
db.salads = require("./saladModel.js")(sequelize, DataTypes)
db.sandwiches = require("./sandwichModel.js")(sequelize, DataTypes)
db.soups = require("./soupModel.js")(sequelize, DataTypes)
db.tandooris = require("./tandooriModel.js")(sequelize, DataTypes)

db.sequelize.sync({ force: false }).then(() => {
    console.log("yes resync success")
});

module.exports = db
