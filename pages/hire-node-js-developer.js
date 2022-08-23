import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireNodeJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireNodeJSDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgIceberg noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="NodeJS Developers"
        PageBannerContent="<p>A strong backend and API are important to create the best software development. Hire Webenix’s NodeJS Developer for ensuring a strong technical background for your business. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hireNodeJSDeveloper/hireNodeJSDeveloper-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Stretch the incredibility with Node JS"
      IntroMainTitle="Give your business wings with Node JS Mobile Application Development."
      IntroContent='
      <p>Let us bring the potential change in your business by Node JS Mobile Application Development.</p>
      <p>NodeJS is the best for developing high-quality projects. It brings a game-changing and revolutionary effect for the business considering digitization. With the help of our highly talented and skilful bunch of NodeJS developers, get the best on-the-go services from Webenix.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireNodeJSDeveloper