const { createUser } = require('../models/userModel');

const register = (req, res) => {
    const { nombre, email, password } = req.body;
    createUser(nombre, email, password, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server error');
        }
        res.status(201).send('User registered');
    });
};

module.exports = { register };