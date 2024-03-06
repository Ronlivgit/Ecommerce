//! Model will include the Schema 
const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    cartId : {type : String},
    userId : {type: mongoose.Types.ObjectId , ref: 'User' }, //currUser.userId
    products : [
        {productId : {type : mongoose.Types.ObjectId , ref: 'Product'}},
        {quantity : {type : Number}}
    ]
})

const Cart = mongoose.model("Carts" , cartSchema)

module.exports = { Cart }