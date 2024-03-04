//! Model will include the Schema 
const mongoose = require("mongoose")


//! orderStatus options : "pending", "processing" , "shipSent" , "shipArrive" , "confirmed"
// pending - waiting for admin reaction , processing - admin confirmed order + wait for ship , shipSent - shipped , 
// shipArrive - waiting for customer , confirmed - user Confirmed 

const orderSchema = new mongoose.Schema({
    email : {type : String , required : true , unique: true },
    fullName : {type : String , required : true },
    password : {type : String , required : true },
    role: {type : String },
    birthdate : {type : Date , required : true},
    userId : {type : mongoose.Types.ObjectId , ref: 'User' } ,
    address: {type : String } ,
    paymentOptions : {type : Array},
    orderStatus : {type : String},
})

const Order = mongoose.model("Orders" , orderSchema)

module.exports = { Order }
