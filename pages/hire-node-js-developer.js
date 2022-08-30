import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireNodeJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HireNodeJSDeveloper = () => {
  return (
    <>
      <Head>
        <title>{data.hirenodejsdeveloper.title}</title>
        <meta name="description" content={data.hirenodejsdeveloper.description}/>
        <meta name="keywords" content={data.hirenodejsdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgIceberg noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="NodeJS Developers"
        PageBannerContent="<p>A strong backend and API are important to create the best software development. Hire Webenix’s NodeJS Developer for ensuring a strong technical background for your business. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/NodeJS-Icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Stretch the incredibility with Node JS"
      IntroMainTitle="Give your business wings with Node JS Mobile Application Development."
      IntroContent='
      <p>Let us bring the potential change in your business by Node JS Mobile Application Development.</p>
      <p>NodeJS is the best for developing high-quality projects. It brings a game-changing and revolutionary effect for the business considering digitization. With the help of our highly talented and skilful bunch of NodeJS developers, get the best on-the-go services from Webenix.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireNodeJSDeveloper