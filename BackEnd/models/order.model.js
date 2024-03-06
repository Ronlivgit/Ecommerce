//! Model will include the Schema 
const mongoose = require("mongoose")

//! OrderStatus = awaiting, confirmed, shipped, arrived , confirmed
const orderSchema = new mongoose.Schema({
    email : {type : String , required : true },
    fullName : {type : String , required : true },
    password : {type : String },
    role: {type : String , default : "user"},
    birthdate : {type : Date , required : true},
    userId : {type : mongoose.Types.ObjectId , ref: 'User' } ,
    address: {type : String } ,
    paymentOptions : {type : Array},
    products : {type : Array},
    orderStatus : {type : String , default : "awaiting"}
})

const Order = mongoose.model("Orders" , orderSchema)

module.exports = { Order }
