import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireReactJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HireReactJSDeveloper = () => {
  return (
    <>
       <Head>
        <title>{data.hirereactjsdeveloper.title}</title>
        <meta name="description" content={data.hirereactjsdeveloper.description}/>
        <meta name="keywords" content={data.hirereactjsdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="ReactJS Developers"
        PageBannerContent="<p>Talking about the fastest working technology  React JS, our developers will make sure to implement the best ideas with Javascript libraries to develop the best frontend interface for your business.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-ReactJS-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Explore the super-sleek frontend development"
      IntroMainTitle="Want the fastest functioning apps, ReactJS is super perfect."
      IntroContent='
      <p>Scale up your business super fast, providing the best functionality in the frontend development by ReactJS.</p>
      <p>ReactJS is considered to be the open-source Javascript Framework that helps in creating dynamic projects. The ReactJS technology is mostly preferred by business owners who want to develop a mobile application user-centric. Get yourself one, without worrying about the code quality because we have got it all covered for you.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireReactJSDeveloper