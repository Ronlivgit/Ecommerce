const { Guest } = require('../models/guest.model');
const { generateToken } = require('../utils/jwt');

const createGuestIfNotExist = async (req, res, next) => {
    // Check if guest token exists in local storage
    let guestToken = req.headers['x-guest-token']; // Assuming the guest token is sent in the request headers

    if (!guestToken) {
        // Generate a new guest token
        guestToken = generateToken({ id: Math.random().toString(36).substring(2, 10), email: '', role: 'guest' });

        // Create a guest model instance
        const guest = new Guest({ token: guestToken });

        // Save the guest model instance to the database
        await guest.save();
    }
    // Set the guest token in the request object for further processing
    req.guestToken = guestToken;
    next();
};


module.exports = createGuestIfNotExist;