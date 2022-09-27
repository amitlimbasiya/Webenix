import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/UIUXDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import TechnologyStack from '../components/TechnologyStack';
import SteptoEngage from '../components/SteptoEngage';
import Head from 'next/head';
import { data } from "../data/Seo";

const UIUX = () => {
  return (
    <>
      <Head>
        <title>{data.uiux.title}</title>
        <meta name="description" content={data.uiux.description}/>
        <meta name="keywords" content={data.uiux.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="UI/UX Design"
        PageBannerContent="The design that delights your customers and should be eye soothing while they use is the power of the design that beholds the creativity of our <strong>UI UX Design & Development Services</strong>." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-UIUX-Design.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="We believe in creativity"
      IntroMainTitle="Showing your brand with a look propelling goals blended with colors."
      IntroContent='
        <p>Our job is to please the visual display for everybody that perfectly blends and matches your brand.</p>
        <p>The elegant websites and mobile app design bring more customers to your company and brand. We are stated as the world’s innovative leading designing company that brings revolutionary changes while we help you escalate business. </p>
    '/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default UIUX