const dotenv = require("dotenv")

dotenv.config();

//! IN CONFIG FOLDER USE INDEX.JS, OTHERWISE, USE REQUIRE './config/xName' .

const {MONGO_URL,jwtSecret} = process.env;

const config = {
    MONGO_URL,
    jwtSecret
}

console.log(config);

module.exports = {config}