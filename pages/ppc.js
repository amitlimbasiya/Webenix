import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/PPCPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const PPC = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgPlatinum pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="PPC"
        PageBannerContent="Webenix helps in bringing down the best marketing tactics that helps in outgrowing the brand evaluation and market. With PPC services we make sure to scale your business with the help of digital marketing professionals." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/ppc-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Pay-per click marketing expertise"
      IntroMainTitle=""
      IntroContent='
      <p>Building your brand’s digital presence with the right PPC actions that is initiated from the basic keyword research and targeting the suitable audience for your brand. Bringing down the ideas into implementation will bring a major difference while conquering the competitive market. </p>
      <p>We use the accurate and right tools for skyrocketing the digital marketing services making a 5x difference in the business by 5x aiming to generate the highest ROI. </p>
    '/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default PPC