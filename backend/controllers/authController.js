const { createUser, findUserByEmail } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const login = (req, res) => {
  const { email, password } = req.body;
  findUserByEmail(email, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    if (!user) {
      return res.status(404).send('User not found');
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send('Invalid credentials');
    }
    // Crear token incluyendo id y nombre del usuario
    const token = jwt.sign({ id: user.id, nombre: user.nombre }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token, nombre: user.nombre });
  });
};

module.exports = { register, login };
