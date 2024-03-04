const { User } = require("../models/user.model")
const { generateToken, verifyToken } = require("../utils/jwt")
const bcrypt = require("bcryptjs")

const getusers = async (req, res) => {
    console.log('got here');
}
const registerUser = async (req, res) => {
    const body = req.body
    try {
        const hash = await bcrypt.hash(body.password, 10)
        body.password = hash
        const createUser = new User(body)
        createUser.userId = createUser._id
        await createUser.save()
        return res.status(200).send({ message: "Registered Successfully.", createUser })
    } catch (error) {
        console.error(error);
    }
}


const logUser = async (req, res) => {
    console.log("got here");
    const { email, password, fullName, role } = req.body
    try {
        const checkIfExist = await User.findOne({ email })
        if (checkIfExist) {
            const isMatching = await bcrypt.compare(password, checkIfExist.password)
            if (isMatching) {
                console.log("User logged in : ", checkIfExist.userId, checkIfExist.email);
                const token = generateToken({ ...checkIfExist.email, ...checkIfExist.userId })
                return res.status(200).send({ message: "Logged successfully : ", checkIfExist, token })
            }
        }
    } catch (error) {
        console.error(error);
    }
}




module.exports = { registerUser, logUser, getusers }