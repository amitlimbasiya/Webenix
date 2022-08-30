import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const TPAI = () => {
  return (
    <>
      <Head>
        <title>{data.itconsulting.title}</title>
        <meta name="description" content={data.itconsulting.description}/>
        <meta name="keywords" content={data.itconsulting.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgIceberg pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="IT Consulting"
        PageBannerContent="<p><strong>Get a clear aspect from us!</strong> Considering the many digital businesses, it needs consulting on initial or timely solutions considering any technological stacks or issues that can help by providing clear aspects and shaping the business to stand apart from their competitive ranges. With the unique software solutions, we at Webenix make sure to provide IT-driven information from professional experts because we look forward to your success in the business.</p>" 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/it-consulting-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Plan to win"
      IntroMainTitle="Get your digital business thriving through our IT consulting by professionals. "
      IntroContent='
      <p>We navigate your business on the right track digitally to keep up with the digital ongoing trends. We pursue making your success stories by guiding and providing a high online presence through the web, mobile applications, and social media. </p>
      <p>It is shaped by the strategic and logical moves to shape the digital landscape of your business. We have a large team of IT experts who help in outgrowing your business like no other where various enterprises and small-scale businesses globally. </p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default TPAI