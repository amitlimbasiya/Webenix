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
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-SMO.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Lorem Ipsum "
      IntroMainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      IntroContent='
      <p>Utilizing effective SMO services will increase your company&#39;s visibility. An effective SMO can give your business an edge over the competition and allow you to become a trendsetter in your field. With Hire SEO Experts&#39; social media marketing services, you can successfully promote your company&#39;s objectives on numerous social media platforms, as well as forums, blogs, and other social media platforms where your company is connected or discussed.</p>
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