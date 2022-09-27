import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/WebDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import TechnologyStack from '../components/TechnologyStack';
import SteptoEngage from '../components/SteptoEngage';
import Head from 'next/head';
import { data } from "../data/Seo";

const WEBDESIGN = () => {
  return (
    <>
      <Head>
        <title>{data.webdesign.title}</title>
        <meta name="description" content={data.webdesign.description}/>
        <meta name="keywords" content={data.webdesign.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgIceCold pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Web Design"
        PageBannerContent="Webenix provides the best services in <strong>Web Design Services</strong> tailored to your business, taking into account user experience along with accurate responsiveness on multiple screen sizes. We ensure customer satisfaction by paying attention to the smallest details." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-Web-Design.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Web Design Services"
        IntroMainTitle="Best Web-Design company for your business."
        IntroContent='
          <p>Webenix serves and fulfils the digital requirement for your business by serving the best <strong>Web Design Services</strong>.</p>
          <p>Webenix has truly impacted the experience in the sector of web designing with the extravagant team of web designers who practised the best development services. We leverage the design considering the specific optimized web content for marking up the target audience with suitable visualization.</p>
          <p>For handling high-profile projects, we have the best team that can help in working on the projects under expertise. From quality analysis to bringing the best functional needs, we stand for all to meet our customer’s expectations as <strong>Web Design Services Company</strong>.</p>
      '/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default WEBDESIGN 