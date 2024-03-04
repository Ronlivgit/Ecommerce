//! Model will include the Schema 
const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    cartId : {type : String},
    userId : {type : String}, //currUser.userId
    products : {type : Array }
})

const Cart = mongoose.model("Carts" , cartSchema)

module.exports = { Cart }