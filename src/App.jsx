import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import SmoothScroll from './hooks/SmoothScroll'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroOnlyBg, setHeroOnlyBg] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // SplashScreen finish handler
  const handleSplashFinish = () => {
    setShowSplash(false);
    setHeroOnlyBg(true);
    setTimeout(() => {
      setHeroOnlyBg(false);
      setShowContent(true);
    }, 1000); // 1s background only
  };

  return (
    <ThemeProvider>
      {/* Main content always rendered */}
      <SmoothScroll ease={0.08} className="app-smooth-scroll">
        <Home heroRevealContent={true} />
      </SmoothScroll>

      {/* SplashScreen overlays main content */}
      {showSplash && (
        <SplashScreen title="Cliberduche" onFinish={handleSplashFinish} />
      )}
    </ThemeProvider>
  );
}

export default App;