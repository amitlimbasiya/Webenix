import React from 'react';
import PageBanner from '../components/HireReactJSDeveloper/PageBanner';
import SectionIntro from '../components/HireReactJSDeveloper/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireReactJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireReactJSDeveloper = () => {
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

export default HireReactJSDeveloper