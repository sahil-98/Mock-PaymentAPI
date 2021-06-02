const mongoose = require("mongoose") ; 
const {Schema} = mongoose ;

const CardSchema = new Schema ({
        Name: String,
        Number: String,
        Cvv: String
} , {timestamps : true}
);

module.exports = mongoose.model("Card" , CardSchema);
