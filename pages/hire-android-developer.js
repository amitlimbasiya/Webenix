import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireAndroidDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HireAndroidDeveloper = () => {
  return (
    <>
      <Head>
        <title>{data.hireandroiddeveloper.title}</title>
        <meta name="description" content={data.hireandroiddeveloper.description}/>
        <meta name="keywords" content={data.hireandroiddeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgChromeWhite noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Android App Developers"
        PageBannerContent="<p>Considering the most demanded platforms globally, Android will be the $400 billion industry by the year 2026. <strong>Hire Android Developer</strong> for your startup and experience world-class android mobile app development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-hire-android-app-developers.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Get the best from the best"
        IntroMainTitle="Be a part of the $400 industry"
        IntroContent='
        <p>Leverage your performance experience with custom mobile app development.</p>
        <p>Breaking the monotonous working of mobile apps, we believe in creating magic for you. The demand for the mobile application amongst users defines strong code development. <strong>Hire Android App Developers</strong> for making sure about the android development services. </p>
      '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireAndroidDeveloper