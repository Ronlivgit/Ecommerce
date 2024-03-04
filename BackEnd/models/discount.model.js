//! Model will include the Schema 
const mongoose = require("mongoose")

const discountSchema = new mongoose.Schema({
    discountId : {type : String},
    discount : {type : Number},
    isValid : {type : Boolean},
    products : {type : Array},
})

const Discount = mongoose.model("Discounts" , discountSchema)

module.exports = { Discount }
