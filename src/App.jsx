import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import SmoothScroll from './hooks/SmoothScroll'; 

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {!showSplash && (
        <SmoothScroll ease={0.08} className="app-smooth-scroll">
          <Home />
        </SmoothScroll>
      )}
    </ThemeProvider>
  );
}

export default App;