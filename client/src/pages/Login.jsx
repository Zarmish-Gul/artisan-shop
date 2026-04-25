import React, { useState } from 'react';

const Login = ({ setRole }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Check credentials
    if (username === 'admin' && password === 'admin') {
      setRole('admin');
    } else {
      // Any other login is treated as a guest
      setRole('guest');
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center p-4">
      <div className="relative bg-white w-[800px] max-w-full min-h-[500px] shadow-2xl overflow-hidden rounded-lg flex overflow-hidden">
        
        {/* LEFT: SIGN IN FORM */}
        <div className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-500 ${isRightPanelActive ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="font-serif text-4xl text-stone-900 mb-2">Sign In</h2>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-8">Access the Artisan Collection</p>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full p-4 bg-stone-50 border border-stone-100 focus:border-stone-900 outline-none transition-all"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-4 bg-stone-50 border border-stone-100 focus:border-stone-900 outline-none transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-black transition-all">
              Sign In
            </button>
            <p className="text-[9px] text-stone-400 mt-4 uppercase tracking-tighter">Admin: admin / admin</p>
          </form>
        </div>

        {/* RIGHT: SIGN UP FORM */}
        <div className={`absolute top-0 left-0 w-1/2 h-full p-12 flex flex-col justify-center transition-all duration-500 bg-white ${isRightPanelActive ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
           <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="font-serif text-4xl text-stone-900 mb-2">Join Us</h2>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-8">Create an Artisan Account</p>
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-stone-50 border border-stone-100 outline-none" />
            <input type="email" placeholder="Email" className="w-full p-4 bg-stone-50 border border-stone-100 outline-none" />
            <input type="password" placeholder="Password" className="w-full p-4 bg-stone-50 border border-stone-100 outline-none" />
            <button className="w-full bg-stone-900 text-white py-4 font-bold uppercase text-xs tracking-widest">Sign Up</button>
          </form>
        </div>

        {/* OVERLAY PANEL */}
        <div className={`w-1/2 bg-stone-900 text-white p-12 flex flex-col justify-center items-center text-center transition-all duration-500 ${isRightPanelActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <h2 className="text-3xl font-serif mb-6">{isRightPanelActive ? "Already a Member?" : "New Here?"}</h2>
          <p className="text-stone-400 text-sm mb-10 leading-relaxed">
            {isRightPanelActive 
              ? "To keep connected with us please login with your personal info" 
              : "Enter your personal details and start your journey with us"}
          </p>
          <button 
            onClick={() => setIsRightPanelActive(!isRightPanelActive)}
            className="border-2 border-white px-12 py-3 uppercase text-[10px] tracking-widest font-bold hover:bg-white hover:text-stone-900 transition-all"
          >
            {isRightPanelActive ? "Sign In" : "Sign Up"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;