//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()

const productSchema = new mongoose.Schema({
    productId: { type: String },
    title: { type: String, required: true },
    img: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: Date, required: true, default: currDate },
    price: { type: Number, required: true },
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