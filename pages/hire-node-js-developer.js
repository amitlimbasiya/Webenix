import React from 'react';
import PageBanner from '../components/HireNodeJSDeveloper/PageBanner';
import SectionIntro from '../components/HireNodeJSDeveloper/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireNodeJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireNodeJSDeveloper = () => {
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

export default HireNodeJSDeveloper