import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HirePPCExpert/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HIREPPCEXPERT = () => {
  return (
    <>
       <Head>
        <title>{data.hireppcexpert.title}</title>
        <meta name="description" content={data.hireppcexpert.description}/>
        <meta name="keywords" content={data.hireppcexpert.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="PPC Expert"
        PageBannerContent="<p>Google Ads Services allows you to receive more leads in less time through one of the fastest marketing methods. Our well-optimized online ad campaigns increase website traffic and conversions while expanding your brand's reach at an affordable rate.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-PPC-Expert.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="PPC marketing services"
      IntroMainTitle="You can now manage your marketing and PPC campaigns with ease!"
      IntroContent='
      <p>No matter whether you&#39;re trying to fine-tune an existing Ads campaign or you&#39;re starting from scratch, HIRE SEO EXPERT can assist you with all aspects of Google Ads (Google Adwords) campaign management. By compiling the best-combined services, get the best reach to your business that ultimately helps in escalating your business. </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIREPPCEXPERT