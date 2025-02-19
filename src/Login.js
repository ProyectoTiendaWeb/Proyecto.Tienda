import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', { email, password });
            localStorage.setItem('token', res.data.token);
            setAuth(true);
        } catch (err) {
            console.error(err);
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;