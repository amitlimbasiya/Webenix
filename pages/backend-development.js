import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/BackendDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const BACKENDDEVELOPMENT = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Backend Development Services"
        PageBannerContent="Behind the appealing and eye-soothing frontend functionality, there is the strong backend that is developed to build appealing and intuitive web applications and websites that users might not be aware of." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/backendDevelopment/backend-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our Backend expertise"
      IntroMainTitle="Let us develop a strong backend for the smooth application functioning rides."
      IntroContent='
      <p>The frontend app view is the face of your application which will be used by users. The real work is done from the backend to create the smooth functionality of features that is present in front of users.</p>
      <p>When it comes to the functioning of the application, you won&#8217;t be disappointed because we have a knack for backend development. By creating the high boundary of secured applications, we build the robust foundation of any application that comes along. </p>
    '/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default BACKENDDEVELOPMENT