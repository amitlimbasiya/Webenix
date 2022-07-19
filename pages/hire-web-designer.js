import React from 'react';
import PageBanner from '../components/HireWebDesignerPage/PageBanner';
import SectionIntro from '../components/HireWebDesignerPage/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWebDesignerPage/OurExpertise';
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