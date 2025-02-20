import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { nombre, email, password });
      if (response.status === 201) {
        alert('Usuario registrado exitosamente');
      } else {
        alert('Error en el registro');
      }
    } catch (err) {
      console.error(err);
      alert('Error en el registro');
    }
  };

  return (
    <div className="register-container">
      <h1>Registrar</h1>
      <form onSubmit={handleRegister}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;