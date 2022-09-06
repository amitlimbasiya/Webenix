import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HirePHPDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireWebDesigner = () => {
  return (
    <>
      <Head>
        <title>{data.hirephpdeveloper.title}</title>
        <meta name="description" content={data.hirephpdeveloper.description}/>
        <meta name="keywords" content={data.hirephpdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgLavenderMist noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="PHP Developers"
        PageBannerContent="<p>We at Webenix, have a team of skilful PHP developers with proficiency in PHP web platforms for many years. If you are finding the development for the PHP platforms, then Webenix is the one-stop solution for all your PHP requirements.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-PHP-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Successful business with a strong backend"
      IntroMainTitle="Need strong backend development? You are in the right place. "
      IntroContent='
      <p>Develop a strong backend for the smooth functionality of apps and software, do not let your business wait any longer. </p>
      <p>Webenix has been into PHP development for more than a decade now, with the core PHP frameworks like Laravel we have been into developing the strong backend for better functionality.</p>
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