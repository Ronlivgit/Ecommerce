//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()

const productSchema = new mongoose.Schema({
    productId: { type: String },
    title: { type: String, required: false },
    img: { type: String, required: false },
    desc: { type: String, required: false },
    date: { type: Date, required: false, default: currDate },
    price: { type: Number, required: false },
    supplyInStock: { type: Number, default : 100 },
    units: { type: Number , default : 1 },
    discounts: [
        {
            discountId: { type: mongoose.Types.ObjectId, ref: "Discount" },
            startPrice : {type : Number},
            discount: { type: Number, default: 0 },
            finalPrice: { type: Number, default: 0 },
        },
    ],
})


const Product = mongoose.model("products", productSchema)

module.exports = { Product }