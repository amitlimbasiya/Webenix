import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireUIUXDesignerPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HIREUIUXDESIGNER = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="UI/UX Designer"
        PageBannerContent="<p>Create clean and sleek designs that are just eye-opening for your customers that wish to bring devastating changes just by how it looks.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/ui-ux-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Get the best creation"
      IntroMainTitle="Create, show, and implement the best."
      IntroContent='
      <p>Webenix has the strength and the most creative head that beholds the power of creating magic. We make your work simpler and easier by providing the best visualisation. Give your business the best visual experience that connects your customers and is eye soothing.</p>
      <p>Hire UI/UX designer to wireframe mobile and web apps or websites. May it be branding or creating everything from the scratch, we stand by you to deliver the best UI/UX design product.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIREUIUXDESIGNER