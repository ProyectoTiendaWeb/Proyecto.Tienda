const db = require('../config/db');
const bcrypt = require('bcryptjs');

const createUser = (nombre, email, password, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
  db.query(sql, [nombre, email, hashedPassword], callback);
};

const findUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

module.exports = { createUser, findUserByEmail };
