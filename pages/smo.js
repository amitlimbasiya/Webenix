import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import SectionServiceBoxes from '../components/SMOPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const SMO = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgChromeWhite pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="SMO"
        PageBannerContent="We help drive your digital presence that brings down the numerous prospects in the funnel. We thrive to create the connection between customers and brands through social media marketing with strategic planning." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/smo/bannerIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our social media presence tactics"
      IntroMainTitle="We create popularity by creating social media tactics."
      IntroContent='
      <p>Today, social media is everything that brings down the online presence of the business you are running, and it is a one-stop solution for customers to find you. There are various businesses running over the social media platforms like Facebook, Instagram, Twitter and much more. Our experts help in bringing down the better solutions with the strategic planning and execution.</p>
    '/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default SMO