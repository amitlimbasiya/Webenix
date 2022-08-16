import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/MobileAppDesignPage/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const MOBILEAPPDESIGN = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgLavenderMist pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Mobile App"
        PageBannerGreenTitle="Design"
        PageBannerContent="<p>The most important aspect of developing a successful mobile application is to bring a viable change in the customer&apos;s lives. With the best features and functioning of any mobile application, users ought to have constant engagement with the mobile app.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/mobileAppDevelopment/mobile-app-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our Mobile App development experience"
      IntroMainTitle=""
      IntroContent='
      <p>Mobile app development is the future and it is only going to continue to be a key part of the newest digital revolution. 2017 is the year of mobile apps. Data from Gartner show that mobile apps will generate $136 billion in revenues this year. The key to success in this market is to make every move intentional.</p>
    '/>
      <OurExpertise/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default MOBILEAPPDESIGN