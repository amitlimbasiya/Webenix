import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireContentWriter/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HIRECONTENTWRITER = () => {
  return (
    <>
       <Head>
        <title>{data.hirecontentwriter.title}</title>
        <meta name="description" content={data.hirecontentwriter.description}/>
        <meta name="keywords" content={data.hirecontentwriter.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Content Writer"
        PageBannerContent="<p>An integral part of your online marketing strategy is the creation of website content.We help by offering expert website content writing services, web page creation, web copywriting, SEO web copywriting, web content services, and web design content. With the help of our network of writers, we will provide you with high-quality, well-written articles to assist you in engaging your clients and prospects.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Content-Writer.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Lorem Ipsum "
      IntroMainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      IntroContent='
      <p>Content marketing begins with SEO content writing. Dynamic web content is designed to effectively communicate your brand message and provide a positive online user experience. The next step in your content strategy is to promote your website content through the appropriate channels. Content marketing for SEO plays a key role here and what better than to be in the hands of experts? </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRECONTENTWRITER