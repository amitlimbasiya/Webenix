import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireReactNativeDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireReactNativeDeveloper = () => {
  return (
    <>
       <Head>
        <title>{data.hirereactnativedeveloper.title}</title>
        <meta name="description" content={data.hirereactnativedeveloper.description}/>
        <meta name="keywords" content={data.hirereactnativedeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="React Native Developers"
        PageBannerContent="<p>Considering the world of mobile and web apps, it has come to the point where there is a thin line between both of them. Whether it is a cross-platform platform or a Native Application, React Native is considered to be the best choice.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-React-Native-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Get in touch with our React Native talents"
      IntroMainTitle="Let us shape your Mobile App  stories with the React Native talents."
      IntroContent='
      <p><strong>Leverage the best without professionals</strong> <br/>It is important to hire the best developer considering any technology. When you hire React Native Developers, we thrive to provide the best experience for your business with the most flexible hiring model.</p>
      <p>Decide your bandwidth, get in touch with us and scale up your business with the best experts. Create history in the market and be amongst the most-competitive companies with Webenix because we care for you!</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireReactNativeDeveloper