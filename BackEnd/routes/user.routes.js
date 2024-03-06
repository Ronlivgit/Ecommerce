const { Router } = require("express")
const router = Router()
// const {Authentication} = require("../middleware/authentication")
const { User } = require('../models/user.model')
const { registerUser, logUser, getUsers,getAuth,updatedUser,deleteUser } = require("../controllers/user.controller")
const {Authentication} = require("../middleware/authentication")
const {Authorize} = require("../middleware/autherization")



router.get('/', getUsers)

router.post('/register', registerUser)

router.post('/login', logUser)

router.get('/init-user', Authentication, getAuth );

router.patch('/:id', Authorize,Authentication("admin"), updatedUser)

router.delete('/:id', Authorize,Authentication("admin"), deleteUser);






module.exports = router