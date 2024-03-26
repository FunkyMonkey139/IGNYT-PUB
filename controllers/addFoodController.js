const db = require("../models");
const appetizer = db.appetizers;
const barbites = db.barbites;
const beer = db.beers;
const bread = db.breads;
const dessert = db.desserts;
const egg = db.eggs;
const livebbq = db.livebbqs;
const mains = db.mains;
const milkshake = db.milkshakes;
const noodles = db.noodles;
const pasta = db.pastas;
const pizza = db.pizzas;
const platter = db.platters;
const rice = db.rices;
const salad = db.salads;
const sandwich = db.sandwiches;
const soup = db.soups;
const tandoori = db.tandooris;

const addAppetizer = async (req, res) => {
    try {
        const data = await appetizer.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addBarbites = async (req, res) => {
    try {
        const data = await barbites.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addBeers = async (req, res) => {
    try {
        const data = await beer.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addBread = async (req, res) => {
    try {
        const data = await bread.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addDessert = async (req, res) => {
    try {
        const data = await dessert.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addEgg = async (req, res) => {
    try {
        const data = await egg.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addLiveBBQ = async (req, res) => {
    try {
        const data = await livebbq.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addMain = async (req, res) => {
    try {
        const data = await mains.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addMilkshake = async (req, res) => {
    try {
        const data = await milkshake.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addNoodles = async (req, res) => {
    try {
        const data = await noodles.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addPasta = async (req, res) => {
    try {
        const data = await pasta.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addPizza = async (req, res) => {
    try {
        const data = await pizza.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addPlatter = async (req, res) => {
    try {
        const data = await platter.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addRice = async (req, res) => {
    try {
        const data = await rice.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addSalad = async (req, res) => {
    try {
        const data = await salad.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addSandwich = async (req, res) => {
    try {
        const data = await sandwich.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addSoup = async (req, res) => {
    try {
        const data = await soup.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const addTandoori = async (req, res) => {
    try {
        const data = await tandoori.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
module.exports = { addAppetizer, addBarbites, addBeers, addBread, addDessert, addEgg, addLiveBBQ, addMain, addMilkshake, addNoodles, addPasta, addPizza, addPlatter, addRice, addSalad, addSandwich, addSoup, addTandoori };