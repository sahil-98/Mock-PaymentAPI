const Payment = require("../models/payment")
exports.paymentinfo = (req,res) => {
    const otp = req.body.otp;
   if(otp!='5644')
   {
       return res.status(400).json({
            error : "Wrong OTP"
       })
   }
    const id  = req.body.client.id;
        Payment.find({"client.id":id}).exec ((err , user) => {
            if(err || !user)
            {
                return res.status(400).json({
                    error : "No user was found"
                })
            }
            const responseBody = {
                message: "Transaction was Done",
                user: user[0].Payment
            };
        res.json({responseBody}); 
    })
}