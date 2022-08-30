import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireNextJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireNextJSDeveloper = () => {
  return (
    <>
      <Head>
        <title>{data.hirenextjsdeveloper.title}</title>
        <meta name="description" content={data.hirenextjsdeveloper.description}/>
        <meta name="keywords" content={data.hirenextjsdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPlatinum noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Next JS Developers"
        PageBannerContent="<p>Webenix is considered to be the expert in escalating the technology game with the Next JS development company that provides you to hire the experts that rightly fit into your business. We ought to deliver a superior technical experience by placing the difference globally. Hire a Next JS Developer that provides the lifetime of the best experiences and some performance-driven digital experience to your business.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/nextjs-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Meet our NEXT JS talents"
      IntroMainTitle="Hire dedicated NEXT JS developers to create the best front-end solutions."
      IntroContent='
      <p><strong>Create the visible Front end mobile application</strong> <br/>Next, JS is considered to be the best frontend development platform that raises the best view and smooth functionality. If you are looking to expand your technical needs with a strong and ongoing trendy application, NEXT JS is considered to be the best choice of all.</p>
      <p>Hire the best talent that helps in developing the NEXT JS developed a mobile application, partner with Webenix and escalate the business with the next-level sources provided by us.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireNextJSDeveloper