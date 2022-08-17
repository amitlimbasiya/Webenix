import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWebDesignerPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireWebDesigner = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPaleBlueLily noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Web Designer"
        PageBannerContent="<p>Website is one of the sources to run and develop your business. With better visibility and sleek designs on every screen size will be the artwork of our talented web designers. With powerful and creative business recognition and content placement, it is your one-stop solution.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hireWebDesigner/hireWebDesigner-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Expertise in responsive website design"
      IntroMainTitle="Remove the line between Customers and Business owners."
      IntroContent='
      <p>Our website design will be fitted in any screen size in front of you. Get yourself a website with zero responsive issues.</p>
      <p>We look for our customer’s requirements and make sure to fulfil their vision. With the affordable pricing figure, we make sure to design a website that fits any screen size. Customers get to experience the class functionality with a high ROI.</p>
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