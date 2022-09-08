import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireSMMExpert/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HIRESMMEXPERT = () => {
  return (
    <>
       <Head>
        <title>{data.hiresmmexpert.title}</title>
        <meta name="description" content={data.hiresmmexpert.description}/>
        <meta name="keywords" content={data.hiresmmexpert.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="SMM Expert"
        PageBannerContent="<p>Are you confident that your Online Social Media Presence is strong enough to beat your competitors? By optimizing your social media presence, you can increase visibility and strengthen your brand. Facebook, Twitter, Instagram, LinkedIn, WhatsApp, Pinterest, YouTube, and many other social media platforms are powerful marketing tools. As a result of social media optimization, your business will become more visible and generate more leads and sales media marketing services at Hire SEO Expert, your business can make an indelible footprint.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-SMM-Expert.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our social media presence tactics"
      IntroMainTitle="We create popularity by creating social media tactics."
      IntroContent='
      <p>Today, social media is everything that brings down the online presence of the business you are running, and it is a one-stop solution for customers to find you. There are various businesses running over the social media platforms like Facebook, Instagram, Twitter and much more. Our experts help in bringing down the better solutions with the strategic planning and execution.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRESMMEXPERT