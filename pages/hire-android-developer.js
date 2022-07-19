import React from 'react';
import PageBanner from '../components/HireAndroidDeveloper/PageBanner';
import SectionIntro from '../components/HireAndroidDeveloper/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireAndroidDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireAndroidDeveloper = () => {
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

export default HireAndroidDeveloper