import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
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
import ProcessOverview from '../components/ProcessOverview';
import MeetOurTeam from '../components/MeetOurTeam';

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <ProcessOverview />
        </section>
        <section id="rfq">
          <RFQWorkflow />
        </section>
        <section id="equipment">
          <EquipmentFleet />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="team">
          <MeetOurTeam />
        </section>
        <section id="compliance">
          <ComplianceSafety />
        </section>
        <section id="resources">
          <ResourcesPartners />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default Home;
