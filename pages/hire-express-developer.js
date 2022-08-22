import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireExpressDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';

const HireExpressDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPlatinum noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Express JS Developers"
        PageBannerContent="<p>Considering the Javascript and the role, Express JS development provides a better touch and flexibility to the application. Hire an Express JS developer for creating the industry-centric success app.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/expressJSBannerIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Hire the best for your business"
      IntroMainTitle="Raise your business with the fully-fledged equipped technology "
      IntroContent='
      <p><strong>Lead your business with strong technical support from Webenix.</strong> <br/>Various frameworks consist of some limitations to creating websites but Express JS is profound and helps in developing the best website pages. It is considered to be the lightweight web-application framework builder where our talented developers have hands in creating the best for your business.</p>
      <p>Express JS brings the revolutionary change in building the web apps that helps in replenishing it amongst the market for stronger visualisation and technical support.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireExpressDeveloper