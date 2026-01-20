import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CapabilitySnapshot from '../components/CapabilitySnapshot';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Resources from '../components/Resources';
import Suppliers from '../components/Suppliers';
import Projects from '../components/Projects';
import EquipmentFleet from '../components/EquipmentFleet';
import ProcessOverview from '../components/ProcessOverview';
import ComplianceCertifications from '../components/ComplianceCertifications';
import RFQWorkflow from '../components/RFQWorkflow';
import SafetyCommitment from '../components/SafetyCommitment';
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
        <AboutUs />
        <Services />
        <Projects />
        <Resources />
        <Suppliers />
        <EquipmentFleet />
        <ProcessOverview />
        <ComplianceCertifications />
        <SafetyCommitment />
        <RFQWorkflow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
