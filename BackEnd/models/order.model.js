//! Model will include the Schema 
const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema({
    email : {type : String , required : true , unique: true },
    fullName : {type : String , required : true },
    password : {type : String , required : true },
    role: {type : String , default : "user"},
    birthdate : {type : Date , required : true},
    userId : {type : String},
    address: {type : String } ,
    paymentOptions : {type : Array}
})

const Order = mongoose.model("Orders" , orderSchema)

module.exports = { Order }
