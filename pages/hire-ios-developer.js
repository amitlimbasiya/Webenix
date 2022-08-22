import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireIOSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HireiosDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPlatinum noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="IOS Developers"
        PageBannerContent="<p>With dedication and development talent, our team caters for the best with ios mobile app development. Target your mobile app benchmark to achieve the latest ideas of the iOs mobile app development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/iosBannerIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Get in touch with iPhone Developers"
      IntroMainTitle="Hire the top-notch iPhone App Developers to deliver the best to your customers. Change with the incredibility"
      IntroContent='
      <p>When you partner with Webenix, we nurture your requirements with the help of some of the best talents that, creating the best functionality of Ios mobile app development, we make sure to fulfil the requirement of our customers.</p>
      <p>Our most incredible and talented team of iPhone mobile app developers will help in creating some of the best apps using Objective-C and swift for the mobile application that users will love to use frequently.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireiosDeveloper