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
        PageBannerContent="Webenix provides the best services in <strong>UI/UX Design</strong> rightly made for your business taking care of the user experience with accurate responsiveness for multiple screen sizes. Taking care of the most minor details we fulfil customer satisfaction." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/uiuxDesign/uiux-banner.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="UI/UX Services"
      IntroMainTitle="Best UI/UX company for your business."
      IntroContent='
        <h3>Webenix serves and fulfils the digital requirement for your business.</h3>
        <p>Webenix has truly impacted the experience in the sector of UI/UX designing with the extravagant team of UI/UX designers who practised the best development process. We leverage the design considering the specific optimized web content for marking up the target audience with suitable visualization.</p>
        <p>For handling high-profile projects, we have the best team that can help in developing the projects under expertise. From quality analysis to bringing the best functional needs, we stand for all to meet our customer’s expectations.</p>
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