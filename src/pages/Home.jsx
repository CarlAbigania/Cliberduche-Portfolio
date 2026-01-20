import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ResourcesPartners from '../components/ResourcesPartners';
import Projects from '../components/Projects';
import EquipmentFleet from '../components/EquipmentFleet';
import ProcessOverview from '../components/ProcessOverview';
import ComplianceSafety from '../components/ComplianceSafety';
import RFQWorkflow from '../components/RFQWorkflow';
import TrustSocialProof from '../components/TrustSocialProof';
import NewsBlog from '../components/NewsBlog';
import MeetOurTeam from '../components/MeetOurTeam';
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
        <ProcessOverview />
        <ComplianceSafety />
        <RFQWorkflow />
        <TrustSocialProof />
        <NewsBlog />
        <MeetOurTeam />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
