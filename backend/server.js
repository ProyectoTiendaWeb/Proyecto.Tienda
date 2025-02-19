const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tienda'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/register', (req, res) => {
    const { nombre, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Server error');
        res.status(201).send('User registered');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send('Invalid password');

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});