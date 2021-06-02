const Card = require("../models/cards");
exports.testcard = (req,res) => {
    const card = new Card (req.body);
    card.save((err , card) => {
        if(err)
        {
            return res.status(400).json ({
                error: "failed to create"
            })
        }
        res.json(card);
    });
}
            