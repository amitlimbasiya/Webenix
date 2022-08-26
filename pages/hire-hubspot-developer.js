import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireHubspotDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HirehubspotDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Hubspot Developers"
        PageBannerContent="<p>With the wide user experience of Hubspot development, we at Webenix create an innovation lead approach to Hubspot Development services where we cater for an extensive range of Hubspot Development COS Services.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/hubspot-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Meet the certified developed agency"
      IntroMainTitle=""
      IntroContent='
      <p>Webenix is the certified Hubspot development agency consisting of the most talented Hubspot Developers that streamline your customer’s requirements.</p>
      <p>With the help of the extensive talent of our developers, we thrive to not only provide Hubspot Development but position the monthly newsletters and marketing material for your business. Hire the best for your business with Webenix.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HirehubspotDeveloper