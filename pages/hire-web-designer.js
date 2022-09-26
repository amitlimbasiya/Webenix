import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWebDesignerPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HireWebDesigner = () => {
  return (
    <>
       <Head>
        <title>{data.hirewebdesigner.title}</title>
        <meta name="description" content={data.hirewebdesigner.description}/>
        <meta name="keywords" content={data.hirewebdesigner.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPaleBlueLily noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col " 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Web Designer"
        PageBannerContent="<p>Website is one of the sources to run and develop your business. With better visibility and sleek designs on every screen size will be the artwork of our talented web designers. With powerful and creative business recognition and content placement, it is your one-stop solution if you are finding <strong>Offshore Web Designer</strong></p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-hire-web-designer.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Expertise in responsive website design"
      IntroMainTitle="Remove the line between Customers and Business owners."
      IntroContent='
      <p>Our website design will be fitted in any screen size in front of you.When you find a <strong>Web Designer Programmer Near Me</strong>, we will be the most approachable and easier to work with.</p>
      <p>We look for our customer’s requirements and make sure to fulfil their vision. With the affordable pricing figure, we make sure to design a website that fits any screen size. Customers get to experience the class functionality with a high ROI.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWebDesigner