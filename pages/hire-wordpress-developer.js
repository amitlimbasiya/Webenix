import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWordPressDeveloperPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWordPressDeveloperPage = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgLightGrey noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="WordPress Developer"
        PageBannerContent="<p>Going with the best content management system, we at Webinix have the most powerful team to develop world-class WordPress Developed websites with a clean and sleek design and all the after-service maintenance development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hirewordpressdevloper/hirewordpressdevloper-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Work with the best CMS platform"
      IntroMainTitle="Manage your business with the most wanted CMS platform."
      IntroContent='
      <h3>Embed your business on the best CMS platform for the easy management of the business content.</h3>
      <p>We believe in easy content management, and thus WordPress plays the most efficient role in it. Make your business easier with an efficient content management platform that we develop and contribute globally from one WordPress VIP Agency.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWordPressDeveloperPage