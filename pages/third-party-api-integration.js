import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const TPAI = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Third-Party Integration"
        PageBannerContent="<p><strong>Explore everything under one roof</strong> Avoid hustling for completing your work, and carry forward your work with all the tools you love under one roof through third-party app integration.</p><p>The Webenix team has the best third-party structural developer that helps in carrying forward all the processes in the business in the smoothest ways possible.</p>" 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/key.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="No need to move from your current tab!"
      IntroMainTitle="We want your business to move forward with no hurdles on the way."
      IntroContent='
      <p>Use tools you love under one roof and avoid switching to multiple tabs or software with the help of third-party integrations. </p>
      <p>The team at Webenix are expert in integrating the tools and apps you love and use every day. With the urge of bringing change in the business through such simple steps, our experts are profound in integrating third-party integrations.</p>
      <h3>Get everything under one roof!</h3>
      <p>Third-party integration helps in lowering the hustle of switching multiple tabs and software. Get in touch with us where our developers will give the best solutions for integrating the third-party tools in your website or your mobile application. </p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default TPAI