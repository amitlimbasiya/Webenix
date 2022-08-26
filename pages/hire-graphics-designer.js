import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireGraphicsDesignerPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireGraphicsDesignPage = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgOysterPink noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Graphics Designer"
        PageBannerContent="<p>With the trendy and eye-catching design, the team of Webenix’s Graphic Designers will justify the power of design in the digital world which aggregates the human-centred delightful experience.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/website-development.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Clean and sleek designs"
      IntroMainTitle="Brand development and growth are what we aim for your business!"
      IntroContent='
      <p>A good design tells a lot about the brand, let us create an impeccable brand for you. Gone are those days which had the existence of primary colours in front of your eyes. With the advancement in the designs, we make sure to make your business look miscellaneous by embedding our aim and goal towards growing your company.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireGraphicsDesignPage