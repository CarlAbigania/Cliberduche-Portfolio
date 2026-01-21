import React from 'react';
import heroImage from '/images/picture.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero relative mt-[70px] py-20 md:py-28 text-center text-white bg-center bg-cover animate-moveBackground"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 55, 124, 0.82), rgba(8, 55, 124, 0.82)), url(${heroImage})`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4 animate-fadeIn">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm border border-white/20">
          Foundations • Full-scale construction • Site Development
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-mont font-bold mt-8 mb-8 leading-tight text-white drop-shadow-lg">
          Land Development & Civil Works Partner in CALABARZON
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed text-white/95 max-w-3xl mx-auto drop-shadow">
          Cliberduche Corporation delivers backfill sourcing, land development, and civil works with a one-stop-shop approach, backed by compliance-led operations, safety-first practices, and reliable delivery since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
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
        <p className="text-sm text-white/80 mt-10">
          Registered with SEC on November 28, 2018 · Serving Laguna, Cavite, and beyond
        </p>
      </div>
    </section>
  );
};

export default Hero;
