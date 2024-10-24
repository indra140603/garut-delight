// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Pastikan file CSS diperbarui

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Cek login dengan data hardcoded
    if (username === 'indratampan' && password === '1234') {
      localStorage.setItem('isAuthenticated', 'true'); // Simpan status login
      navigate('/'); // Arahkan ke halaman utama
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Tambahkan Logo */}
        <img 
          src="/images/logo1.png" 
          alt="Logo" 
          className="login-logo" 
        />
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
