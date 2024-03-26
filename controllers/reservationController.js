const db = require("../models");
const Reservation = db.reservations;

const reserve = async (req, res) => {
    try {
        const data = await Reservation.create(req.body);
        res.status(201).json({ status: "success" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err });
    }
};

module.exports = { reserve };
