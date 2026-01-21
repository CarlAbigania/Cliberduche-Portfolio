import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ResourcesPartners from '../components/ResourcesPartners';
import EquipmentFleet from '../components/EquipmentFleet';
import ComplianceSafety from '../components/ComplianceSafety';
import RFQWorkflow from '../components/RFQWorkflow';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Projects />
        <ResourcesPartners />
        <EquipmentFleet />
        <ComplianceSafety />
        <RFQWorkflow />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
