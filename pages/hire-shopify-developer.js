import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireShopifyDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HIRSHOPIFYRDEVELOPER = () => {
  return (
    <>
      <Head>
        <title>{data.hirshopifyrdeveloper.title}</title>
        <meta name="description" content={data.hirshopifyrdeveloper.description}/>
        <meta name="keywords" content={data.hirshopifyrdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgChromeWhite noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Shopify Developers"
        PageBannerContent="<p>Webenix has the most incredible bunch of Shopify developers that helps in building your eCommerce Shopify technology. Leave building Shopify development to our developers!</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-Shopify-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Meet our Shopify talents"
      IntroMainTitle="Get in touch with your own Shopify Developer Company,"
      IntroContent='
      <p>We all know that Shopify is one of the biggest platforms for eCommerce business owners. It is a self-developed platform where everything is managed by Shopify itself.</p>
      <p>Why <strong>hire Shopify Developers</strong>? Well, we help in providing the user-centric and custom user experience by intriguing the Shopify app experience implementation.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRSHOPIFYRDEVELOPER