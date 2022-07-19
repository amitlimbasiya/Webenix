import React from 'react';
import PageBanner from '../components/HirePHPDeveloper/PageBanner';
import SectionIntro from '../components/HirePHPDeveloper/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HirePHPDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWebDesigner = () => {
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

export default HireWebDesigner