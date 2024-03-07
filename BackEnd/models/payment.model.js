//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()

const paymentSchema = new mongoose.Schema({
    paymentId : {type : String},
    txId : {type : String} ,
    totalPrice : {type : Number } ,
    paymentInfo : {type : String} ,
    isDone : {type : Boolean , default : false},
    status : {type : String , default : false},
    date : {type : Date, default : new Date()},
    buyerId : {type : String, required : true}
})

const Payment = mongoose.model("Payments" , paymentSchema)

module.exports = { Payment }