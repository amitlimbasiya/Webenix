import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HirePHPDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWebDesigner = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgLavenderMist noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="PHP Developers"
        PageBannerContent="<p>We at Webenix, have a team of skilful PHP developers with proficiency in PHP web platforms for many years. If you are finding the development for the PHP platforms, then Webenix is the one-stop solution for all your PHP requirements.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hirePhpDeveloper/hirePHPDeveloper-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Successful business with a strong backend"
      IntroMainTitle="Need strong backend development? You are in right place."
      IntroContent='
      <h3>Develop a strong backend for the smooth functionality of apps and software, do not let your business wait any longer. </h3>
      <p>Webenix has been into PHP development for more than a decade now, with the core PHP frameworks like Laravel we have been into developing the strong backend for better functionality.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWebDesigner