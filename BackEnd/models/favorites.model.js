//! Model will include the Schema 
const mongoose = require("mongoose")

const favoriteSchema = new mongoose.Schema({
    favoriteId : {type : String},
    userId : {type: mongoose.Types.ObjectId , ref: 'User' }, //currUser.userId
      products : {type : Array} ,
      img : {type : String},
    productId : {type: mongoose.Types.ObjectId , ref : "Product"},
    price: {type : Number},
})

const Favorite = mongoose.model("favorites" , favoriteSchema)

module.exports = { Favorite }