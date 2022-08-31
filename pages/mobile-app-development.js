import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/MobileAppDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const ECOMMERCEDEVELOPMENT = () => {
  return (
    <>
    <Head>
        <title>{data.mobileappdevelopment.title}</title>
        <meta name="description" content={data.mobileappdevelopment.description}/>
        <meta name="keywords" content={data.mobileappdevelopment.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgFog pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Mobile App Development"
        PageBannerContent="Our mobile app development helps in escalating the startup companies. Get in touch with us whether you are looking to build an app from the beginning or want to redesign it, we are here to give away the best solutions." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/mobile-app-design-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our Mobile App Development services"
      IntroMainTitle="Bringing the big ideas to implement for small screens"
      IntroContent='
      <p>We make sure to provide modern and trendy apps that will stand in the market amongst competitors. It is important to reach out to your customers where they find the best use of the functionality of the mobile application.</p>
      <p>We blend the mixture of everything from the trend to the functionality to create the better user experience and customer engagement. </p>
    '/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default ECOMMERCEDEVELOPMENT