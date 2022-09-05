import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/MobileAppDesignPage/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const MOBILEAPPDESIGN = () => {
  return (
    <>
      <Head>
        <title>{data.mobileappdesign.title}</title>
        <meta name="description" content={data.mobileappdesign.description}/>
        <meta name="keywords" content={data.mobileappdesign.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgLavenderMist pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Mobile App"
        PageBannerGreenTitle="Design"
        PageBannerContent="<p>The most important aspect of developing a successful mobile application is to bring a viable change in the customers&apos; lives. With the best features and functioning of any mobile application, users ought to have constant engagement with the mobile app.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-mobile-app-design-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our Mobile App development experience"
      IntroMainTitle="Design Centric Mobile App Development Services with smooth functioning."
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