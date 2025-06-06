import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageLoader.css';

const PageLoader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 3500);
    const timer2 = setTimeout(() => navigate('/'), 4500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [navigate]);

  return (
    <div className={`page-loader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-wrapper">
        <h1 className="gradient-text loader-title">SAT Academy</h1>
        <p className="tagline">Empowering Skills. Enabling Success.</p>
      </div>
    </div>
  );
};

export default PageLoader;
