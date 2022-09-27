import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/MVPDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const MVPDEVELOPMENT = () => {
  return (
    <>
      <Head>
        <title>{data.mvpdevelopment.title}</title>
        <meta name="description" content={data.mvpdevelopment.description}/>
        <meta name="keywords" content={data.mvpdevelopment.keyword} />
      </Head>
      <PageBanner 
          PageBannerClass="pagebanner-section pagebanner-shape bgEggWhite pagebanner-align-center noiseBg"
          PageBannerImgClass="pagebannerimg-col" 
          PageBannerTitle="MVP Development"
          PageBannerContent="Our skilled <strong>MVP Development Services</strong> help in visualizing the ideas and implementing them in the best ways for the customers out there. Let us draw your software development practices considering the market valuation with the best <strong>MVP development company</strong>." 
          PageBannerBtnText="Know More"
          PageBannerBtnLink="#"
          PageBannerImageWidth="280px"
          PageBannerImageHeight="250px"
          PageBannerImage="/images/f-MVP-Development.svg"
        />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Our Expertise"
        IntroMainTitle="Scale your ideas, build a vision and implement the best"
        IntroContent='
        <p><strong>MVP App Development</strong> product helps in creating the product that is viable enough to have the minimum and only necessary features. At Webenix we create valuable and yet the most innovative products that are business-centric.</p>
        <p>If you are looking for the quick development of a mobile app or software, we help you in going through the best digital journey. Create the best of both worlds that is creating customer-centric mobile apps and yet with the quick functionality with Webenix. </p>
      '/>
      <ServiceFeatureBox/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/> 
      <Blog/>
    </>
  )
}
export default MVPDEVELOPMENT;