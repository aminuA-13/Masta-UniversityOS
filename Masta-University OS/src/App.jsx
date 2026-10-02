import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import LoginSignup from './Pages/Login/LoginSignup';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('masta-demo-auth') === 'true');

  const handleLogin = () => {
    localStorage.setItem('masta-demo-auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('masta-demo-auth');
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginSignup onLogin={handleLogin} />} />
      <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/'} replace />} />
    </Routes>
  );
};

export default App;
