//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()
//! Place required on : title,img,desc,date,price
const productSchema = new mongoose.Schema({
    productId: { type: String },
    title: { type: String,  },
    img: { type: String,  },
    desc: { type: String, },
    date: { type: Date, default: currDate },
    price: { type: Number, },
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