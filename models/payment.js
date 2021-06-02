const mongoose = require("mongoose") ; 
const {Schema} = mongoose ;

const paymentSchema = new Schema ({
    
    client: {
        id: String
    },
    buyer: {
        Name: String,
        Email: String,
        CPF: String,
    },
    Payment: {
        Amount: String,
        Type: String,
        Card: String,
    },
    Card: {
        Name: String,
        Number: String,
        Expirationdate: String, 
        Cvv: String
    } 
} , {timestamps : true}
);

module.exports = mongoose.model("Payment" , paymentSchema);
