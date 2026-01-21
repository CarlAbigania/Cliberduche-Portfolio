import React from 'react';
import heroImage from '/images/picture.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero relative mt-[70px] py-32 md:py-40 text-center text-white bg-center bg-cover animate-moveBackground"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 55, 124, 0.82), rgba(8, 55, 124, 0.82)), url(${heroImage})`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 animate-fadeIn">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm border border-white/20">
          Civil Works • Land Development • Construction
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mont font-bold mt-8 mb-6 leading-tight text-white drop-shadow-lg">
          Civil Works Partner in CALABARZON
        </h1>
        <p className="text-lg md:text-xl mb-12 leading-relaxed text-white/90 max-w-2xl mx-auto drop-shadow">
          Backfill sourcing, land development, and civil works excellence since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#rfq"
            className="btn-primary"
          >
            Request Quote Now
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
