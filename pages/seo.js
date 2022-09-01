import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/SEOPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";
const SEO = () => {
  return (
    <>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description}/>
        <meta name="keywords" content={data.seo.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgEggWhite pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="SEO"
        PageBannerContent="Today digitalisation has turned tables for the business and so for anything, one will find information on search engines, it is highly important to always stay visible digitally and thus SEO plays the game. With the right service of SEO potential customers will find your business on the top." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-SEO.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="SEO Services"
        IntroMainTitle="Create strong visibility of your business without expertise in Search Engine Optimisation."
        IntroContent='
        <p>We help you gain the top-centric reach by executing a strong knowledge of SEO. The strategic planning of the SEO and content will drive the right business to your business. We work on the detailed and trendy SEO keywords, with detailed research on them according to your business. Let us build your brand with result-centric solutions.</p>
      '/>
      <SectionServiceBoxes/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default SEO