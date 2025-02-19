const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const db = require('./config/db');
const usuariosRoutes = require('./routes/usuarios');



const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/usuarios', usuariosRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});