const mongoose = require("mongoose")
const { generateToken } = require("../utils/jwt")

const guestSchema = new mongoose.Schema({
    token: {
        type: String,
        require: true,
        default: generateToken({ id: Math.random().toString(36).substring(2, 10), email: '', role: 'guest' })
    }
})

const Guest = mongoose.model("guest" , guestSchema)

module.exports = { Guest }