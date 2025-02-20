const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = (nombre, email, password, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, hashedPassword], callback);
};

module.exports = { createUser };