import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = ({ setAuth, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('nombre', res.data.nombre);
      setAuth(true);
      setUser(res.data.nombre);
    } catch (err) {
      // Muestra el error completo en la consola para diagnosticar el problema
      console.error('Error de login:', err.response ? err.response.data : err.message);
      // Muestra un mensaje de error al usuario basado en la respuesta del servidor (si existe)
      alert(err.response && err.response.data ? err.response.data : 'Login fallido. Verifica tus credenciales.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Ingresar</button>
        </form>
        <p className="no-account-link">
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        <Link to="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
  );
};

export default Login;
