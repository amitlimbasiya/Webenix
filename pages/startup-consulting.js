import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const STARTUPCONSULTING = () => {
  return (
    <>
     <Head>
        <title>{data.startupconsulting.title}</title>
        <meta name="description" content={data.startupconsulting.description}/>
        <meta name="keywords" content={data.startupconsulting.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Startup Consulting"
        PageBannerContent="<p><strong>Are you a new startup founder?</strong> Startups need attention right from the initial days considering the right technology selection to developing the digital presence. Right from the beginning, we thrive to take out the best from your business that will gradually be the brand of your customers globally. From raising the visibility of your business to raising the value, we make sure that everything is done in the presence of highly experienced experts. </p>" 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-startup-consulting.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Celebrate your win"
      IntroMainTitle="Grow your startup right from the first day!"
      IntroContent='
      <p>Startup consulting should be chosen wisely especially when you are considering making it big and sustainable. Initial steps are crucial and hence startups need to get nurtured by professionals and experts.</p>
      <p>May it be your bootstrapped startup, we help you grow to make it the best that stands out in the market.</p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default STARTUPCONSULTING