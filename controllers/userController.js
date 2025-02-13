// backend/controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generar token JWT
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Registrar usuario
const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'El usuario ya existe' });

        const user = await User.create({ name, email, password, role });
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.id, user.role)
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el registro' });
    }
};

// Iniciar sesión
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Credenciales incorrectas' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Credenciales incorrectas' });

        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.id, user.role)
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el login' });
    }
};

// Obtener usuarios (solo admin)
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
};

module.exports = { registerUser, loginUser, getUsers };
