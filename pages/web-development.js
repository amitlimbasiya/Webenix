import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/WebDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const WEBDEVELOPMENT = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Web Development"
        PageBannerContent="Webenix has been delivering the best <strong>web development</strong> services considering the transparency of content and the sleek web design. By using the top-programming language and building your website with clean codes, it is designed with definite standards and specifications that our customers are looking for." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/codeIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Web Development"
      IntroMainTitle="Website developed for better results in your business."
      IntroContent='
      <p>We are the best website design company having a team of some skilful designers. We believe in showcasing your business by developing it with impactful designs and delivering the most creative projects at your doorstep.</p>
      <p>We make sure to use the right tools and sources that come from in-depth research and expertise in using it. Web designing is always about understanding the client’s need and delivering the best piece out of it by asking for the pre-approval by preparing a wireframe outline design.</p>
    '/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default WEBDEVELOPMENT