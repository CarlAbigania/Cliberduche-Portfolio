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
import Footer from '../components/Footer';
import ProcessOverview from '../components/ProcessOverview';
import MeetOurTeam from '../components/MeetOurTeam';

const Home = ({ heroRevealContent = true }) => {
  return (
    <>
      <section id="hero">
        <Hero revealContent={heroRevealContent} />
      </section>
      {heroRevealContent && <Header />}
      {heroRevealContent && <Sidebar />}
      <main>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="equipment">
          <EquipmentFleet />
        </section>
        <section id="process">
          <ProcessOverview />
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
