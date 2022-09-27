import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/CMSDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const CMSDEVELOPMENT = () => {
  return (
    <>
      <Head>
        <title>{data.cmsdevelopment.title}</title>
        <meta name="description" content={data.cmsdevelopment.description}/>
        <meta name="keywords" content={data.cmsdevelopment.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgLightPink pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="CMS"
        PageBannerGreenTitle="Development"
        PageBannerContent="Have a powerful hold on the content with a highly developed content management system as <strong>CMS Development Company</strong>. The accurate <strong>Custom CMS Development</strong> will help in attracting your targeted customers." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-CMS-Development.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="CMS Development Services"
      IntroMainTitle="Control your website content like never before with the organized functionality."
      IntroContent='
      <p>Webenix offers custom <strong>CMS Development</strong> for every business sector, letting you choose the selective feature for custom development. Edit your website content from anywhere without using any other software like a webmaster. <strong>CMS Development Services</strong> is the ultimate solution for frequent changes in the content of your website through our company. </p>
    '/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default CMSDEVELOPMENT