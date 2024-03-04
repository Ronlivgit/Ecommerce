//! Model will include the Schema 
const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
<<<<<<< HEAD
    cartId : {type : String},
    userId : {type: mongoose.Types.ObjectId , ref: 'User' }, //currUser.userId
    products : [
        {product : {type : mongoose.Types.ObjectId , ref: 'Product'}},
        {quantity : {type : Number}}
    ]
=======
    cartId: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: 'User' }, //currUser.userId
    products: { type: Array }
>>>>>>> a6c543edd75d4b029975e6cc63427852dd403b0e
})

const Cart = mongoose.model("Carts", cartSchema)

module.exports = { Cart }