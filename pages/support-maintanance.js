import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const SUPPORTANDMAINTENANCE = () => {
  return (
    <>
      <Head>
        <title>{data.supportandmaintenance.title}</title>
        <meta name="description" content={data.supportandmaintenance.description}/>
        <meta name="keywords" content={data.supportandmaintenance.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Support & Maintanance"
        PageBannerContent="<p>Multiple companies choose to outsource the support and maintenance for the technical support as investing the resource in-house becomes a lot more expensive. Outsource it and let your work be done with having the best and dedicated knowledge for the same.</p>" 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/supportIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our quick support"
      IntroMainTitle="We help in keeping your software updated with our quick maintenance support services."
      IntroContent='
      <p>With the experience for the several years in Webenix that is focused in providing the best solutions for their company have been delivering the quick and instant support to the customers so that they do not have to worry about the software lagging or deal with downgrade versions. We deliver quick IT support to several global companies who are particular about their software and are looking for improving their IT support frequently.</p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default SUPPORTANDMAINTENANCE