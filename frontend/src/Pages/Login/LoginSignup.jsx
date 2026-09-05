import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const demoAccounts = [
  { role: 'University Management', email: 'vc@masta.demo' },
  { role: 'Registry / Admin', email: 'registry@masta.demo' },
  { role: 'Lecturer', email: 'lecturer@masta.demo' },
  { role: 'Student', email: 'student@masta.demo' },
];

export default function LoginSignup({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('vc@masta.demo');
  const [password, setPassword] = useState('demo1234');

  const submit = (event) => {
    event.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <main className="login-page">
      <section className="login-brand-panel">
        <div className="brand-lockup">
          <span className="brand-mark">M</span>
          <div><strong>Masta</strong><small>UniversityOS</small></div>
        </div>
        <div className="login-copy">
          <span className="eyebrow">UNIVERSITY INTELLIGENCE, UNIFIED</span>
          <h1>The digital operating and intelligence layer for modern universities.</h1>
          <p>One platform to operate the student lifecycle, connect university teams and turn institutional data into decisions.</p>
          <div className="login-pill-row">
            <span>Operate</span><span>Connect</span><span>Understand</span>
          </div>
        </div>
        <div className="login-proof">
          <div><b>01</b><span>One student record</span></div>
          <div><b>02</b><span>One institutional view</span></div>
          <div><b>03</b><span>Configurable workflows</span></div>
        </div>
      </section>

      <section className="login-form-panel">
        <form className="login-card" onSubmit={submit}>
          <span className="demo-badge">CLIENT DEMO</span>
          <h2>Welcome to Masta</h2>
          <p>Sign in to explore the UniversityOS demonstration environment.</p>
          <label>Email address<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required /></label>
          <label>Password<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required /></label>
          <button type="submit" className="primary-login">Enter demonstration</button>
          <div className="demo-accounts">
            <span>Quick demo access</span>
            {demoAccounts.map((item) => <button key={item.role} type="button" onClick={() => setEmail(item.email)}>{item.role}</button>)}
          </div>
          <small className="demo-note">Prototype environment · No live university data</small>
        </form>
      </section>
    </main>
  );
}
