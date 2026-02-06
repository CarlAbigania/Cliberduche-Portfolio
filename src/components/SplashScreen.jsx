import React, { useEffect, useState } from 'react';
import logo from '/images/logo2.png';

const SplashScreen = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [startLetterFade, setStartLetterFade] = useState(false);

  const companyName = 'CLIBERDUCHE';
  const abbreviationIndices = [0, 3, 6]; // C(0), B(3), D(6)

  useEffect(() => {
    // After 1 second, start the letter-by-letter fade effect
    const transformTimer = setTimeout(() => {
      setStartLetterFade(true);
    }, 1200);

    // Show splash screen for 2.8 seconds total, then start exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    // Complete the splash screen after exit animation
    const exitTimer = setTimeout(() => {
      onFinish();
    }, 3500); // 2800 + 700ms animation

    return () => {
      clearTimeout(transformTimer);
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated background orbs with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left glow orb */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite',
            boxShadow: '0 0 60px rgba(8, 55, 124, 0.08)',
          }}
        ></div>
        
        {/* Right glow orb */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          style={{
            animation: 'float 10s ease-in-out infinite reverse',
            boxShadow: '0 0 40px rgba(15, 74, 161, 0.08)',
          }}
        ></div>

        {/* Subtle top accent */}
        <div 
          className="absolute -top-40 right-1/3 w-60 h-60 bg-primary/3 rounded-full blur-3xl"
          style={{
            animation: 'pulse 4s ease-in-out infinite',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12 md:mb-16 animate-bounceIn" style={{ animationDelay: '0s' }}>
          <img
            src={logo}
            alt="Cliberduche Logo"
            className="h-32 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Company Name - Letter by Letter Fade with CBD converging to center */}
        <div className="h-24 md:h-28 flex items-center justify-center mb-6 overflow-hidden">
          <h1 
            className="text-6xl md:text-7xl font-mont font-bold flex justify-center tracking-wider"
            style={{
              animation: 'slideInUp 0.8s ease-out',
              animationDelay: '0.3s',
              animationFillMode: 'both',
            }}
          >
            {companyName.split('').map((letter, index) => {
              const isCBDLetter = abbreviationIndices.includes(index);
              const shouldHide = startLetterFade && !isCBDLetter;
              
              return (
                <span
                  key={`letter-${index}`}
                  className={`inline-block transition-all duration-1300 overflow-hidden ${
                    isCBDLetter ? 'text-secondary' : 'text-primary'
                  }`}
                  style={{
                    opacity: shouldHide ? 0 : 1,
                    maxWidth: shouldHide ? '0px' : '100px',
                    transform: shouldHide ? 'scale(0.75)' : 'scale(1)',
                    transitionDelay: `${index * 140}ms`,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </h1>
        </div>

        {/* Corporation Label */}
        <p
          className="text-2xl md:text-3xl font-mont text-primary mb-4 tracking-widest letter-spacing-2 font-light"
          style={{
            animation: startLetterFade ? 'slideInUp 0.8s ease-out forwards' : 'slideInUp 0.8s ease-out 1.5s both',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          Corporation
        </p>

        {/* Tagline */}
        <p
          className="text-primary/70 text-sm md:text-base max-w-md mx-auto font-light leading-relaxed"
          style={{
            animation: startLetterFade ? 'slideInUp 0.8s ease-out forwards' : 'slideInUp 0.8s ease-out 1.8s both',
            opacity: startLetterFade ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          Civil Works • Land Development • Construction
        </p>

        {/* Loading Bar */}
        <div
          className="mt-14 w-72 h-1.5 bg-primary/10 rounded-full overflow-hidden mx-auto backdrop-blur-sm"
          style={{
            animation: startLetterFade ? 'slideInUp 0.8s ease-out forwards' : 'slideInUp 0.8s ease-out 2.1s both',
            boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            style={{
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s ease-in-out infinite, slideLoadingBar 2.8s ease-in-out forwards',
              animationDelay: startLetterFade ? '0s' : '0s',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
