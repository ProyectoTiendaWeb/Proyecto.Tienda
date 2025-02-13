// backend/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Rutas públicas
router.post('/register', registerUser);
router.post('/login', loginUser);

// Rutas protegidas
router.get('/', protect, admin, getUsers);

module.exports = router;