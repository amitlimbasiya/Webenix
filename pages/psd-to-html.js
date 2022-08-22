import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/PsdToHtmlPage/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const PSDTOHTML = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgHawkesBlue pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="PSD TO HTML"
        PageBannerGreenTitle="Design"
        PageBannerContent="<p>Guess what you have already found a design that compliments and meets your business needs and wants to use in the development. Our Front-end developers will help in converting the PSD file to HTML with the compatible W3C, HTML5/CSS3 files. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/psd-html-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our expertise in PSD to HTML design"
      IntroMainTitle="PSD to HTML is designing an experience"
      IntroContent='
      <p>Without the implementation of the right design, there is no purpose for what you present. Before implementation, it is important to make the project layout. It is difficult to find the right candidate or sometimes unaffordable too. Fortunately, you can always rely on us for the design for your one-time or long-term project. Converting PSD to HTML web development is included in the W3C validation with the finest quality check.</p>
    '/>
      <OurExpertise/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default PSDTOHTML