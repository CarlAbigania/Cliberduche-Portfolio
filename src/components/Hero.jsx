import React from 'react';
import heroImage from '/images/picture.png'; // or Unsplash URL

const Hero = () => {
  return (
    <section
      id="home"
      className="hero relative mt-[70px] py-[180px] md:py-[150px] text-center text-white bg-center bg-cover animate-moveBackground"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 55, 124, 0.82), rgba(8, 55, 124, 0.82)), url(${heroImage})`,
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
          Foundations • Full-scale construction • Site Development
        </span>
        <h2 className="text-5xl md:text-6xl sm:text-4xl font-mont font-semibold mt-6 mb-6">
          Land Development & Civil Works Partner in CALABARZON
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90">
          Cliberduche Corporation delivers backfill sourcing, land development, and civil works with a one-stop-shop approach, backed by compliance-led operations, safety-first practices, and reliable delivery since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-secondary text-primary font-semibold py-3 px-8 rounded shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all"
          >
            Request Quotation
          </a>
          <a
            href="#projects"
            className="border-2 border-white/60 text-white bg-white/10 hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded transition-all"
          >
            View Projects
          </a>
        </div>
        <p className="text-sm text-white/80 mt-6">
          Registered with SEC on November 28, 2018 · Serving Laguna, Cavite, and beyond
        </p>
      </div>
    </section>
  );
};

export default Hero;
