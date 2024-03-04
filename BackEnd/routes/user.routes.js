const {Router} = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const {User} = require('../models/user.model')
const { registerUser, logUser } = require("../controllers/user.controller")


router.post('/register' , registerUser)

router.post('/login' , logUser)



module.exports = router