import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/FrontendDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const FRONTENDDEVELOPMENT = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bg_lightgreen pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Frontend Development Services"
        PageBannerContent="We go beyond our limits to scrap the code to maximize the user experience by providing the best design pieces at affordable prices." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/frontendDevelopment/frontend-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our expertise"
      IntroMainTitle="Visual sights are polished by the clean codes in Frontend Development."
      IntroContent='
      <p>The first and foremost step before any development is the right interaction with the customers for their requirements, without it, there will be poor development creating a negative impact on the brand and customer’s expectations. </p>
      <p>Webenix has been into front-end development for decades and has created 150+ projects for the mid and lenterprise-level. Considering the complete look to the functionality, everything is taken care of by our team. </p>
    '/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default FRONTENDDEVELOPMENT