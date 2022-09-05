import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireIonicDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireionicDeveloper = () => {
  return (
    <>
       <Head>
        <title>{data.hireionicdeveloper.title}</title>
        <meta name="description" content={data.hireionicdeveloper.description}/>
        <meta name="keywords" content={data.hireionicdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Ionic Developers"
        PageBannerContent="<p>Ionic is considered to be the best mobile app development platform that allows your apps to run over any screen with smooth functioning which is the reason Ionic has always remained the smart choice for developing a mobile application.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-ionicframework-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Partner with the best"
      IntroMainTitle="Build world-class web apps with our Ionic Developers."
      IntroContent='
      <p><strong>Let us build you the Hybrid success stories.</strong> <br/>Having hands-on Hybrid and cross-platform services, we make sure to provide the best to your business considering creating the best web apps.</p>
      <p>Ionic is mostly preferred by business owners to create the best out of web apps because of its advanced features availability and some featured templates that ensures the smooth performance and working of the web apps. For creating the best off-shore development projects, hire the best Ionic Web App developers. </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireionicDeveloper