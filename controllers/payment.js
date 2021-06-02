const Payment = require("../models/payment")
const Card = require("../models/cards");

exports.payment = (req,res) => {
   //checking OTP for correct user
    const otp = req.body.otp;
   if(otp!='5644')
   {
       return res.status(400).json({
            error : "Wrong OTP"
       })
   }
   //checking payment method
    if(req.body.method == 'boleto') {
        res.send("Your Bolteo number 999999");
    }
    else
    {
        //Validating Card from the database
        Card.find().lean().exec(function (err, users) {
            const cardnumber = req.body.Card.Number;
            if(users[0].Number!=cardnumber)
            {
                return res.status(400).json ({
                    error: "please write correct card number"
                }) 
            }     
            const payment = new Payment (req.body);
            payment.save((err , payment) => {
                if(err)
                {
                    return res.status(400).json ({
                        error: "failed to create"
                    }) 
                }
                res.json(
                    {
                    "message" : "Payment is Succesfull",
                    "UserInfo" : payment.buyer,
                    }
                );
            })
        })
    }
}