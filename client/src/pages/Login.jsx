import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded check for now
    if (password === "admin123") {
      const adminUser = { role: 'admin', name: 'Studio Manager' };
      setUser(adminUser);
      localStorage.setItem('artisan_user', JSON.stringify(adminUser));
      navigate('/admin');
    } else {
      alert("Invalid Studio Code");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <form onSubmit={handleLogin} className="bg-white p-12 border border-stone-200 shadow-sm max-w-sm w-full">
        <h2 className="font-serif text-2xl text-center mb-8">Studio Access</h2>
        <input 
          type="password" 
          placeholder="Enter Passkey" 
          className="w-full border-b border-stone-200 py-3 mb-8 outline-none focus:border-stone-900 text-sm transition-all"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-stone-900 text-white py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-stone-800">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;