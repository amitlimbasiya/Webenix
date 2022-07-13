import React from 'react';
import PageBanner from '../components/HireWordPressDeveloperPage/PageBanner';
import SectionIntro from '../components/HireWordPressDeveloperPage/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWordPressDeveloperPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWordPressDeveloperPage = () => {
  return (
    <>
      <PageBanner/>
      <SectionIntro/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWordPressDeveloperPage