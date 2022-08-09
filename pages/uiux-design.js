import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/UIUXDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import TechnologyStack from '../components/TechnologyStack';
import SteptoEngage from '../components/SteptoEngage';

const UIUX = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="UI/UX Design"
        PageBannerContent="The design that delights your customers and should be eye soothing while they use is the power of the design that beholds the creativity of our skilful developers." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/uiuxDesign/uiux-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="We believe in creativity"
      IntroMainTitle="Bringing colours to the right plate is our job that will surpass it in your business."
      IntroContent='
        <h3>We are no longer living in a world where there are only no primary colours around the websites and mobile applications.</h3>
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