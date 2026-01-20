import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CapabilitySnapshot from '../components/CapabilitySnapshot';
import About from '../components/About';
import CompanyStory from '../components/CompanyStory';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Resources from '../components/Resources';
import Suppliers from '../components/Suppliers';
import Projects from '../components/Projects';
import EquipmentFleet from '../components/EquipmentFleet';
import EquipmentTables from '../components/EquipmentTables';
import ProcessOverview from '../components/ProcessOverview';
import Compliance from '../components/Compliance';
import CertificationsCompliance from '../components/CertificationsCompliance';
import RFQWorkflow from '../components/RFQWorkflow';
import SafetyCommitment from '../components/SafetyCommitment';
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
        <CompanyStory />
        <MissionVision />
        <Services />
        <Resources />
        <Suppliers />
        <Projects />
        <EquipmentFleet />
        <EquipmentTables />
        <ProcessOverview />
        <Compliance />
        <CertificationsCompliance />
        <RFQWorkflow />
        <SafetyCommitment />
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
