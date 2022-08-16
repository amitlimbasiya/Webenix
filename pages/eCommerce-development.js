import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/EcommerceDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const ECOMMERCEDEVELOPMENT = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgHawkesBlue pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="eCommerce Development"
        PageBannerContent="Let us help in showcasing your business in the most organized ways for your customers that will align your brand voice by creating a perfect eCommerce element facilitating faster selling profit elements." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/eCommerceDevelopment/eCommarce-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Our eCommerce Development services"
      IntroMainTitle=""
      IntroContent='
      <p>No matter what you are selling, if it is not showcased digitally, it is not worth it. Our eCommerce development sector is beholden strong enough for making the best websites and applications that leads to the maximum interaction of customers. </p>
      <p>We deliver competitive websites that come a long way in the market to run down the smooth eCommerce business with flawless functionality, page load, easy checkouts, and smooth payment gateways for running down the business where customers love to visit again. </p>
    '/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default ECOMMERCEDEVELOPMENT