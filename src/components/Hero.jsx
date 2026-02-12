import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero relative min-h-screen flex items-center justify-center text-center text-white bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(60, 60, 60, 0.75) 0%, rgba(70, 70, 70, 0.70) 50%, rgba(60, 60, 60, 0.75) 100%), url('/images/compony provided/office.jpg')`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        zIndex: 12,
      }}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 animate-fadeIn relative z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 fade-in-up">
          Civil Works • Land Development • Construction
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mont font-bold mt-8 mb-6 leading-tight text-white drop-shadow-lg fade-in-up" style={{ animationDelay: '0.2s' }}>
          Civil Works Partner <span className="bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent">in CALABARZON</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow fade-in-up" style={{ animationDelay: '0.4s' }}>
          Backfill sourcing, land development, and civil works excellence since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="btn-primary text-base md:text-lg hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/drive/folders/1QFFNjs4s6DDpD4ncV1n4AXV5HPU7MMxk?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base md:text-lg hover:scale-105"
          >
            Our Archives
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
