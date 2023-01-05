import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/WebDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const WEBDEVELOPMENT = () => {
  return (
    <>
      <Head>
        <title>{data.webdevelopment.title}</title>
        <meta name="description" content={data.webdevelopment.description}/>
        <meta name="keywords" content={data.webdevelopment.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Web Development"
        PageBannerContent="Our web development team specializes in creating custom, user-friendly websites that are tailored to meet the unique needs and goals of your business." 
        PageBannerBtnText="Know More"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-Web-Development.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Web Development"
        IntroMainTitle="Transform your online presence with our expert web development services"
        IntroContent='
        <p>Our team of skilled web developers is here to help you elevate your online presence. From custom website design to e-commerce development, we offer a full range of services to meet your needs. Let us help you make a lasting impression with a professional website that reflects the unique personality and goals of your business.</p>
      '/>
      <ServiceFeatureBox/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/> 
      <Blog/>
    </>
  )
}
export default WEBDEVELOPMENT; 