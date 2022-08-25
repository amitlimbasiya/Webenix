import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/CMSDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';


const CMSDEVELOPMENT = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgLightPink pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="CMS Development"
        PageBannerContent="Have a powerful hold on the content with a highly developed content management system development for your website. The accurate content management system will help in attracting your targeted customers." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/cms-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="CMS Development Services"
      IntroMainTitle="Control your website content like never before with the organized functionality."
      IntroContent='
      <p>Customized and personalized website development is rightly made for your business. Webenix offers CMS development services for every business sector, letting you choose the selective feature for the custom development. Edit your website content from anywhere without using any other software like a webmaster. CMS development is the ultimate solution for frequent changes in the content for your website.</p>
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