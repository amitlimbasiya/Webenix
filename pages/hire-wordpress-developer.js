import React from 'react';
import PageBanner from '../components/HireWordPressDeveloperPage/PageBanner';
import SectionIntro from '../components/HireWordPressDeveloperPage/SectionIntro';
import HiringModels from '../components/HiringModels';
import FAQ from '../components/FAQ';
import Benefits from '../components/Benefits';
import SteptoEngage from '../components/HireWordPressDeveloperPage/SteptoEngage';
import TechnologyStack from '../components/HireWordPressDeveloperPage/TechnologyStack';
import Blog from '../components/Blog';


const HireWordPressDeveloperPage = () => {
  return (
    <>
      <PageBanner/>
      <SectionIntro/>
      <HiringModels/>
      <TechnologyStack/>
      <SteptoEngage/>
      <FAQ/>
      <Benefits/>
      <Blog/>
    </>
  );
};

export default HireWordPressDeveloperPage