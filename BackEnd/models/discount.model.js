//! Model will include the Schema 
const mongoose = require("mongoose")


const discountSchema = new mongoose.Schema({
    discountId : { type : String },
    couponName : { type : String , required : true},
    discount : { type : Number , required : true},
    isValid : { type : Boolean , default : true },
    forProducts : [{ type : mongoose.Types.ObjectId , ref: 'Product' }],
})


const Discount = mongoose.model("Discounts" , discountSchema)

module.exports = { Discount }
