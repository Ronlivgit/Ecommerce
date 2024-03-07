const jwt = require("jsonwebtoken") 
const {config} = require('../config')
const {User} = require('../models/user.model')


const generateToken = (payload) => {
    try{
        const token = jwt.sign( payload , config.jwtSecret , {expiresIn:"1000hr"} )
        return token ;
    }
    catch(err){
        console.error(err);
    }
}

const verifyToken = (token) => {
    try{
        const payload = jwt.verify(token , config.jwtSecret)
        // console.log("currUser : ", payload)
        return payload
    }
    catch(err){
        console.error(err);
    }
}

module.exports = {verifyToken , generateToken}