import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import InfiniteMarquee from '../components/InfiniteMarquee';
import { useTheme } from '../hooks/useTheme';

// Lazy loaded components (below the fold)
const Projects = lazy(() => import('../components/Projects'));
const EquipmentFleet = lazy(() => import('../components/EquipmentFleet'));
const ComplianceSafety = lazy(() => import('../components/ComplianceSafety'));
const ProcessOverview = lazy(() => import('../components/ProcessOverview'));
const MeetOurTeam = lazy(() => import('../components/MeetOurTeam'));
const ResourcesPartners = lazy(() => import('../components/ResourcesPartners'));

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
        <Hero revealContent={heroRevealContent} />
      </div>

      {heroRevealContent && <Header />}
      {heroRevealContent && <Sidebar />}

      {/* 
        Overlapping Main Content (The "Curtain")
        z-10 ensures it sits above the sticky hero.
        bg-color ensures the hero is hidden once scrolled.
        rounded-t creates the card/sheet effect.
      */}
      <main className={`relative z-10 w-full rounded-t-[40px] md:rounded-t-[60px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-colors duration-700 ${isDarkMode ? 'bg-[#030712]' : 'bg-[#f8fafc]'}`}>
        <AboutUs />
        <Services />
                
        <InfiniteMarquee text="CIVIL ENGINEERING • LAND DEVELOPMENT • HEAVY EQUIPMENT • " speed={1} />
 
        <Suspense fallback={<div className="h-40 w-full animate-pulse bg-white/5" />}>
          <Projects />
          <EquipmentFleet />
          <ProcessOverview />
          <MeetOurTeam />
          <ComplianceSafety />
          <ResourcesPartners />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
