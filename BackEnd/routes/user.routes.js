const { Router } = require("express")
const router = Router()
const { User } = require('../models/user.model')
const { registerUser, logUser, getUsers, getAuth, updatedUser, deleteUser } = require("../controllers/user.controller")
const { Authentication } = require("../middleware/authentication")
const { Authorize } = require("../middleware/autherization")



router.get('/', getUsers)

router.post('/register', registerUser)

router.post('/login', logUser)

router.get('/init-user', Authentication, getAuth);

router.patch('/:id', Authentication, Authorize("admin"), updatedUser)

router.delete('/:id', Authentication, Authorize("admin"), deleteUser);






module.exports = router