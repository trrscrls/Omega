import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HistoryPage from './pages/HistoryPage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for a premium experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-red blur-3xl opacity-20 animate-pulse"></div>
          <div className="flex gap-6 mb-12 relative z-10">
            <div className="w-4 h-4 rounded-full bg-brand-blue animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-4 h-4 rounded-full bg-brand-red animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-4 h-4 rounded-full bg-brand-yellow animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
        <div className="text-brand-black tracking-[0.8em] text-lg font-light uppercase animate-fade-in relative z-10">
          Omega
        </div>
        <div className="mt-4 h-[1px] w-24 bg-gray-200 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-brand-black animate-slide-in-right"></div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;