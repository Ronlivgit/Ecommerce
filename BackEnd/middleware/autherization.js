//! Authorization roles : admin , user


const Authorize = (role) => {
    console.log(role);
    return (req,res,next) => {
        //we get req.user info through Authentication, then check it's role.
        const user = req.user
        // role.includes checks if user's role is part of the multiple roles implented.
        if(role.includes(user.role) === role) {
            return next()
        }
        else{
            // status 401 means unauthorized, we can use sendStatus to automatically send the status outcome.
            return res.sendStatus(401)
        }
    }
}

//TODO example for admins allow to del : router.delete('/path' , authentication , authorize(["admin","owner"]) , deleteUserFunc)

module.exports = {Authorize}