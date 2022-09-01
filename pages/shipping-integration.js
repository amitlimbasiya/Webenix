import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/shipping-integration-page/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const SHIPPINGINTEGRATION = () => {
  return (
    <>
      <Head>
        <title>{data.shippingintegration.title}</title>
        <meta name="description" content={data.shippingintegration.description}/>
        <meta name="keywords" content={data.shippingintegration.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgChromeWhite pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Shipping Integration"
        PageBannerContent="In the world of digitalisation, everybody is on their phone ordering everything from their phone. Nevertheless, shipping integration became an important aspect to build. Webenix provides the best shipping integration services. With the help of our technical development experts, we help you in creating the best shipping integration that is specified to the particular industry." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-shipping-integration-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our Integration Expertise"
      IntroMainTitle="Drive smooth business, develop sleek shipping integration"
      IntroContent='
      <p>Why worry about the shipping hurdles that come through when you can easily develop an integrated shipping process in your website or mobile application? It becomes 10x easier for streamlining the eCommerce business. </p>
      <p>Avoid keeping the extra manpower and consistently looking for the shipping address, let it be managed by the shipping API that reciprocates the easy logistics and shipping management and lowers your efforts.</p>
      <p>Webenix allows eCommerce and other D2C brands with shipping integration for making the logistic and integration process smoother.</p>
    '/>
    <OurExpertise/>
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our Mission"
      IntroMainTitle="Ship your worries and not your shipping process"
      IntroContent='
      <p>Webenix wants business owners to sail their business without worrying about anything. With the shipping API integration services from the expertise development team, we provide you with the easiest shipping structure for a better logistic process. Let us help you to integrate the right for your valuable business.</p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default SHIPPINGINTEGRATION