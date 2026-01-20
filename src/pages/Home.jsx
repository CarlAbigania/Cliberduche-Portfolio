import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CapabilitySnapshot from '../components/CapabilitySnapshot';
import About from '../components/About';
import Services from '../components/Services';
import Resources from '../components/Resources';
import Projects from '../components/Projects';
import EquipmentFleet from '../components/EquipmentFleet';
import ProcessOverview from '../components/ProcessOverview';
import Compliance from '../components/Compliance';
import CoreValues from '../components/CoreValues';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CapabilitySnapshot />
        <About />
        <Services />
        <Resources />
        <Projects />
        <EquipmentFleet />
        <ProcessOverview />
        <Compliance />
        <CoreValues />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
