import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/ResponsiveWebDesign/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const DESIGNPROTOTYPE = () => {
  return (
    <>
      <Head>
        <title>{data.designprototype.title}</title>
        <meta name="description" content={data.designprototype.description}/>
        <meta name="keywords" content={data.designprototype.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgEggWhite pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Design"
        PageBannerGreenTitle="Prototype"
        PageBannerContent="<p>Bringing the idea is not difficult but when it is rooted in the implementation there raises the risk and uncertainty that is armed around. With the strong prototyping process, we believe in boosting the returns and strategies to bring strong technical development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/design-prototype-banner-icon.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="We are expertise in designing prototyping"
        IntroMainTitle="Design with lower risk, create with Design Protyping"
        IntroContent='
        <p>Design the prototyping for the better implementation of an idea. We aim to push you with the leap by bringing confidence by taking it to the next level. It needs to be completed in the hands of experienced experts as the wrong decision can turn out to be more costly, time-consuming and can create aggressive endeavours and this is not something we expect you to experience.</p>
        <p>While validating the implementation, we make sure to take care of developing the wide web and mobile platforms that can turn into a delightful user experience.</p>
      '/>
      <OurExpertise/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default DESIGNPROTOTYPE