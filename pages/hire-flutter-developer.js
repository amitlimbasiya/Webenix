import React from 'react';
import PageBanner from '../components/HireFlutterDeveloper/PageBanner';
import SectionIntro from '../components/HireFlutterDeveloper/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireFlutterDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireFlutterDeveloper = () => {
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

export default HireFlutterDeveloper