const { User } = require("../models/checkIfExist.model")
const { generateToken, verifyToken } = require("../utils/jwt")
const bcrypt = require("bcryptjs")

const getUsers = async (req, res) => {
    try {
        const query = req.query
        const Users = await User.find({ ...query });
        return res.send(Users);
    } catch (error) {
        console.log(error);
        return res.status(400).send("error");
    }}

    const getAuth = async (req, res) =>{
        const checkIfExist = req.checkIfExist;
        try {
            const dbUser = await User.findById(checkIfExist.id);
            res.send(dbUser);
        } catch (error) {
            console.log(error);
            res.status(400).send("error");
        }
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
    const { email, password, fullName, role } = req.body
    try {
        const checkIfExist = await User.findOne({email })
        if(checkIfExist){
            const isMatch = await bcrypt.compare(password, checkIfExist.password);
            if (isMatch) {
                const token = generateToken({id: checkIfExist._id, email: checkIfExist.email, role:"admin"})
                return res.status(200).send({ message: "Logged successfully : ", checkIfExist, token })
            }else {
            return res.status(401).json("User not found or invalid credentials");
            }
        };
        return res.status(401).json("User not found or invalid credentials");
    } catch (error) {
        console.log(error);
        res.status(400).json("error");
    }
}

const updatedUser = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        let foundUser = await User.findById(id);
        if (foundUser) {
            foundUser = await User.findByIdAndUpdate(id, body, { new: true });
            return res.send({ message: 'User updated successfully', data: foundUser });
        } else {
            return res.status(404).send('No user found');
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
    }
}



const deleteUser = async (req, res) =>{
    const { id }= req.params;
    try {
        const isDelleted = await User.findByIdAndDelete(id);
        if(isDelleted){
           return res.send({messege: 'user deleted'});
        }
        return res.send({messege: 'user Not found'});
    } catch (error) {
        console.log(error);
        res.status(400).send("error");
    }
}

//! Validate through localStorage token (if checkIfExist has valid token, auto log-in)



module.exports = { registerUser, logUser, getUsers ,getAuth,updatedUser,deleteUser}