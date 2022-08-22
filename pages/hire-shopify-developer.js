import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireShopifyDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HIRSHOPIFYRDEVELOPER = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgChromeWhite noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Shopify Developers"
        PageBannerContent="<p>Webenix has the most incredible bunch of Shopify developers that helps in building your eCommerce Shopify technology. Leave building Shopify development to our developers!</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hire-shopify-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Meet our Shopify talents"
      IntroMainTitle="Get in touch with your own Shopify partner company "
      IntroContent='
      <p>We all know that Shopify is one of the biggest platforms for eCommerce business owners. It is a self-developed platform where everything is managed by Shopify itself.</p>
      <p>Why hire Shopify Developers? Well, we help in providing the user-centric and custom user experience by intriguing the Shopify app experience implementation.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRSHOPIFYRDEVELOPER