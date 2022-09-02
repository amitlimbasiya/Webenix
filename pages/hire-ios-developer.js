import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireIOSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";


const HireiosDeveloper = () => {
  return (
    <>
      <Head>
        <title>{data.hireiosdeveloper.title}</title>
        <meta name="description" content={data.hireiosdeveloper.description}/>
        <meta name="keywords" content={data.hireiosdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgPlatinum noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="IOS Developers"
        PageBannerContent="<p>With dedication and development talent, our team caters for the best with ios mobile app development. Target your mobile app benchmark to achieve the latest ideas of the iOs mobile app development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-hire-IOS-developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Get in touch with iPhone Developers"
      IntroMainTitle="Hire the top-notch iPhone App Developers to deliver the best to your customers. Change with the incredibility"
      IntroContent='
      <p>When you partner with Webenix, we nurture your requirements with the help of some of the best talents that, creating the best functionality of Ios mobile app development, we make sure to fulfil the requirement of our customers.</p>
      <p>Our most incredible and talented team of iPhone mobile app developers will help in creating some of the best apps using Objective-C and swift for the mobile application that users will love to use frequently.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireiosDeveloper