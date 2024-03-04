//! Model will include the Schema 
const mongoose = require("mongoose")

const favoriteSchema = new mongoose.Schema({
    favoriteId : {type : String},
    userId : {type : String}, //currUser.userId
    products : {type : Array }
})

const Favorite = mongoose.model("favorites" , favoriteSchema)

module.exports = { Favorite }