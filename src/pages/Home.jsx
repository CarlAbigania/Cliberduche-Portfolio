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
import ProcessOverview from '../components/ProcessOverview';
import MeetOurTeam from '../components/MeetOurTeam';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { useTheme } from '../hooks/useTheme';

const Home = ({ heroRevealContent = true }) => {
  const { isDarkMode } = useTheme();

  return (
    <>
      {/* 
        Sticky Hero Section 
        This div wraps the Hero to ensure it stays pinned at the top 
        while the main content scrolls over it.
      */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        <section id="hero">
          <Hero revealContent={heroRevealContent} />
        </section>
      </div>

      {heroRevealContent && <Header />}
      {heroRevealContent && <Sidebar />}

      {/* 
        Overlapping Main Content (The "Curtain")
        z-10 ensures it sits above the sticky hero.
        bg-color ensures the hero is hidden once scrolled.
        rounded-t creates the card/sheet effect.
      */}
      <main className={`relative z-10 w-full rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-700 ${isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'}`}>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        
        <InfiniteMarquee text="CIVIL ENGINEERING • LAND DEVELOPMENT • HEAVY EQUIPMENT • " speed={1} />
        
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
    </>
  );
};

export default Home;
