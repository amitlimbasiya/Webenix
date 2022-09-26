import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireSeoExpert/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HIRESEOEXPERT = () => {
  return (
    <>
       <Head>
        <title>{data.hireseoexpert.title}</title>
        <meta name="description" content={data.hireseoexpert.description}/>
        <meta name="keywords" content={data.hireseoexpert.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="SEO Expert"
        PageBannerContent="<p>When it comes to increasing Internet visibility, the first thing that comes to our mind is SEO. With years of experience in SEO strategic planning, we help in thriving the best visibility of your business because we want your business to grow through us. We can provide you with SEO experts to help you succeed in your business.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-SEO-Expert.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Seo Services"
      IntroMainTitle="Boost your visibility and foothold with our search engine optimization services"
      IntroContent='
      <p>We offer SEO services that make sense for your business. Your website will be rich with keywords, ranked higher, and attract more visitors with our help. Waiting for what? Hire the best SEO experts today for your business.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRESEOEXPERT