
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

const showAppetizer = async (req, res) => {
    try {
        const data = await appetizer.findAll({});
        const allAppetizer = [];
        data.map((appetizer) => {
            allAppetizer.push({
                name: appetizer.appetizername,
                img: appetizer.imageurl,
                price: appetizer.price,
            });
        });

        res.status(200).json({
            status: "success",
            appetizers: allAppetizer,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showBarbites = async (req, res) => {
    try {
        const data = await barbites.findAll({});
        const allBarbites = [];
        data.map((barbite) => {
            allBarbites.push({
                name: barbite.barbitename,
                img: barbite.imageurl,
                price: barbite.price,
            });
        });

        res.status(200).json({
            status: "success",
            barbites: allBarbites,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

const showBeers = async (req, res) => {
    try {
        const data = await beer.findAll({});
        const allBeers = [];
        data.map((beer) => {
            allBeers.push({
                name: beer.beername,
                img: beer.imageurl,
                price: beer.price,
            });
        });

        res.status(200).json({
            status: "success",
            beers: allBeers,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};
const showBread = async (req, res) => {
    try {
        const data = await bread.findAll({});
        const allBreads = [];
        data.map((bread) => {
            allBreads.push({
                name: bread.breadname,
                img: bread.imageurl,
                price: bread.price,
            });
        });

        res.status(200).json({
            status: "success",
            breads: allBreads,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showDessert = async (req, res) => {
    try {
        const data = await dessert.findAll({});
        const allDesserts = [];
        data.map((dessert) => {
            allDesserts.push({
                name: dessert.dessertname,
                img: dessert.imageurl,
                price: dessert.price,
            });
        });

        res.status(200).json({
            status: "success",
            desserts: allDesserts,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showEgg = async (req, res) => {
    try {
        const data = await egg.findAll({});
        const allEggs = [];
        data.map((egg) => {
            allEggs.push({
                name: egg.eggname,
                img: egg.imageurl,
                price: egg.price,
            });
        });

        res.status(200).json({
            status: "success",
            eggs: allEggs,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showLiveBBQ = async (req, res) => {
    try {
        const data = await livebbq.findAll({});
        const allLivebbq = [];
        data.map((livebbq) => {
            allLivebbq.push({
                name: livebbq.livebbqname,
                img: livebbq.imageurl,
                price: livebbq.price,
            });
        });

        res.status(200).json({
            status: "success",
            livebbqs: allLivebbq,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showMain = async (req, res) => {
    try {
        const data = await mains.findAll({});
        const allMains = [];
        data.map((mains) => {
            allMains.push({
                name: mains.mainsname,
                img: mains.imageurl,
                price: mains.price,
            });
        });

        res.status(200).json({
            status: "success",
            mains: allMains,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showMilkshake = async (req, res) => {
    try {
        const data = await milkshake.findAll({});
        const allMilkshake = [];
        data.map((milkshake) => {
            allMilkshake.push({
                name: milkshake.milkshakename,
                img: milkshake.imageurl,
                price: milkshake.price,
            });
        });

        res.status(200).json({
            status: "success",
            milkshakes: allMilkshake,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showNoodles = async (req, res) => {
    try {
        const data = await noodles.findAll({});
        const allNoodles = [];
        data.map((noodles) => {
            allNoodles.push({
                name: noodles.noodlesname,
                img: noodles.imageurl,
                price: noodles.price,
            });
        });

        res.status(200).json({
            status: "success",
            noodles: allNoodles,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showPasta = async (req, res) => {
    try {
        const data = await pasta.findAll({});
        const allPasta = [];
        data.map((pasta) => {
            allPasta.push({
                name: pasta.pastaname,
                img: pasta.imageurl,
                price: pasta.price,
            });
        });

        res.status(200).json({
            status: "success",
            pastas: allPasta,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showPizza = async (req, res) => {
    try {
        const data = await pizza.findAll({});
        const allPizza = [];
        data.map((pizza) => {
            allPizza.push({
                name: pizza.pizzaname,
                img: pizza.imageurl,
                price: pizza.price,
            });
        });

        res.status(200).json({
            status: "success",
            pizzas: allPizza,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showPlatter = async (req, res) => {
    try {
        const data = await platter.findAll({});
        const allPlatter = [];
        data.map((platter) => {
            allPlatter.push({
                name: platter.plattername,
                img: platter.imageurl,
                price: platter.price,
            });
        });

        res.status(200).json({
            status: "success",
            platters: allPlatter,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showRice = async (req, res) => {
    try {
        const data = await rice.findAll({});
        const allRice = [];
        data.map((rice) => {
            allRice.push({
                name: rice.ricename,
                img: rice.imageurl,
                price: rice.price,
            });
        });

        res.status(200).json({
            status: "success",
            rices: allRice,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showSalad = async (req, res) => {
    try {
        const data = await salad.findAll({});
        const allSalad = [];
        data.map((salad) => {
            allSalad.push({
                name: salad.saladname,
                img: salad.imageurl,
                price: salad.price,
            });
        });

        res.status(200).json({
            status: "success",
            salads: allSalad,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showSandwich = async (req, res) => {
    try {
        const data = await sandwich.findAll({});
        const allSandwich = [];
        data.map((sandwich) => {
            allSandwich.push({
                name: sandwich.sandwichname,
                img: sandwich.imageurl,
                price: sandwich.price,
            });
        });

        res.status(200).json({
            status: "success",
            sandwiches: allSandwich,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showSoup = async (req, res) => {
    try {
        const data = await soup.findAll({});
        const allSoups = [];
        data.map((soup) => {
            allSoups.push({
                name: soup.soupname,
                img: soup.imageurl,
                price: soup.price,
            });
        });

        res.status(200).json({
            status: "success",
            soups: allSoups,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
const showTandoori = async (req, res) => {
    try {
        const data = await tandoori.findAll({});
        const allTandoori = [];
        data.map((tandoori) => {
            allTandoori.push({
                name: tandoori.tandooriname,
                img: tandoori.imageurl,
                price: tandoori.price,
            });
        });

        res.status(200).json({
            status: "success",
            tandoori: allTandoori,
        });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};
module.exports = { showAppetizer, showBarbites, showBeers, showBread, showDessert, showEgg, showLiveBBQ, showMain, showMilkshake, showNoodles, showPasta, showPizza, showPlatter, showRice, showSalad, showSandwich, showSoup, showTandoori };