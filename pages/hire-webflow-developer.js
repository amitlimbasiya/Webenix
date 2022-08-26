import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWebflowDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWebflowDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="a Webflow Developers"
        PageBannerContent="<p>For developing a seamless and SEO-focused website design for your business, Webflow is the best choice that you would make. With the help of Webenix experts, you can get accurate solutions right for your business.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/webFlowIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Partner with the best"
      IntroMainTitle="Meet your own Webflow developing partner"
      IntroContent='
      <p>We help in the utter customisation that helps your brand to replenish in the market as one of the best companies. We at Webenix help in developing the most appealing Webflow Websites, that is taken care of with the conversion-optimised and customer-centric.</p>
      <p>We try to understand and implement your requirements in the best ways possible considering escalating your business amongst your competitors. Get in touch with your partner for Webflow Development.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWebflowDeveloper