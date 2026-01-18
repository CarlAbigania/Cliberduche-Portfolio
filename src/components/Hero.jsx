import React from 'react';
import heroImage from '/images/picture.png'; // or Unsplash URL

const Hero = () => {
  return (
    <section
      id="home"
      className="hero relative mt-[70px] py-[180px] md:py-[150px] text-center text-white bg-center bg-cover animate-moveBackground"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
      }}
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl sm:text-4xl font-mont font-semibold mb-6">
          Building a Sustainable Future Through Land Development
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Cliberduche Corporation provides high-quality backfill materials, land development, and construction services with a commitment to quality, safety, and integrity since 2018.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-secondary hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded transition-all"
          >
            Get In Touch
          </a>
          <a
            href="#about"
            className="border-2 border-primary text-white bg-primary hover:bg-white hover:text-dark font-semibold py-3 px-8 rounded transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
