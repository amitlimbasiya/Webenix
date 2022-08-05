import Head from 'next/head'
import React from 'react';
import PageBanner from '../components/HireGraphicsDesignerPage/PageBanner';
import SectionIntro from '../components/HireGraphicsDesignerPage/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireGraphicsDesignerPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireGraphicsDesignPage = () => {
  return (
    <>
      <Head>
        <title>Hire Graphics Designer</title>
      </Head>
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

export default HireGraphicsDesignPage