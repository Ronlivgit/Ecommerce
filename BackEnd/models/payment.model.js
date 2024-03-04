//! Model will include the Schema 
const mongoose = require("mongoose")

const currDate = new Date()

const paymentSchema = new mongoose.Schema({
    paymentId : {type : String},
    txId : {type : String} ,
    totalPrice : {type : Number } ,
    paymentInfo : {type : String} ,
    isDone : {type : Boolean , default : false},
    status : {type : String , default : false}
})

const Payment = mongoose.model("Payments" , paymentSchema)

module.exports = { Payment }