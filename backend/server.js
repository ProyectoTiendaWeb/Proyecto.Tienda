const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Importar y usar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
