import React, { useEffect, useState } from 'react';
import logo from '/images/logo2.png';

const SplashScreen = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds, then start exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Complete the splash screen after exit animation
    const exitTimer = setTimeout(() => {
      onFinish();
    }, 3200); // 2500 + 700ms animation

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary via-accent to-primary transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 animate-bounceIn">
          <img
            src={logo}
            alt="Cliberduche Logo"
            className="h-32 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-5xl md:text-6xl font-mont font-bold text-white mb-4 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          CLIBERDUCHE
        </h1>
        <p className="text-xl md:text-2xl font-mont text-secondary mb-8 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
          Corporation
        </p>

        {/* Tagline */}
        <p className="text-white/80 text-base md:text-lg max-w-md mx-auto animate-slideInUp" style={{ animationDelay: '0.6s' }}>
          Civil Works • Land Development • Construction
        </p>

        {/* Loading Bar */}
        <div className="mt-12 w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto animate-slideInUp" style={{ animationDelay: '0.8s' }}>
          <div
            className="h-full bg-gradient-to-r from-secondary to-white rounded-full animate-shimmer"
            style={{
              backgroundSize: '200% 100%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
