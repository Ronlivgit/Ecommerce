//! Model will include the Schema 
const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userId : {type : String},
    fullName : {type : String , required : true },
    email : {type : String , required : true , unique: true },
    password : {type : String , required : true },
    role: {type : String , default : "user"},
    birthdate : {type : Date , default : null},
    address: {type : Array } ,
    paymentOptions : {type : Array}
})

const User = mongoose.model("Users" , userSchema)

module.exports = { User }