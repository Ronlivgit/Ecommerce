const dotenv = require("dotenv")

dotenv.config();

//! IN CONFIG FOLDER USE INDEX.JS, OTHERWISE, USE REQUIRE './config/xName' .

const { MONGO_URL, jwtSecret, PAYPAL_SECRET_KEY, PAYPAL_CLIENT_ID } = process.env;

const config = {
    MONGO_URL,
    jwtSecret,
    PAYPAL_CLIENT_ID,
    PAYPAL_SECRET_KEY
}

console.log(config);

module.exports = { config }