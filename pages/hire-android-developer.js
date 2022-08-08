import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireAndroidDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireAndroidDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgChromeWhite noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Android App Developers"
        PageBannerContent="<p>Considering the most demanded platforms globally, Android will be the $400 billion industry by the year 2026. Hire the best android developers for your startup and experience world-class android mobile app development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hireAndroidDeveloper/hireAndroidDeveloper-banner.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Get the best from the best"
        IntroMainTitle="Be a part of the $400 industry"
        IntroContent='
        <h3>Leverage your performance experience with custom mobile app development.</h3>
        <p>Breaking the monotonous working of mobile apps, we believe in creating magic for you. The demand for the mobile application amongst users defines strong code development.</p>
      '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireAndroidDeveloper