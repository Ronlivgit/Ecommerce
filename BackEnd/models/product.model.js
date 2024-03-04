//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()

const productSchema = new mongoose.Schema({
    productId : {type : String},
    title : {type : String , required : true },
    img : {type : String , required : true , unique: true },
    desc : {type : String , required : true },
    date : {type : Date , required : true , default : currDate},
    price : {type : Number , required:true},
    units: {type : Number } ,
    discount : {type : Boolean , default : false}
})

const Product = mongoose.model("products" , productSchema)

module.exports = { Product }