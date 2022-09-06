import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireDotNetDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HIREDOTNETDEVELOPER = () => {
  return (
    <>
       <Head>
        <title>{data.hiredotnetdeveloper.title}</title>
        <meta name="description" content={data.hiredotnetdeveloper.description}/>
        <meta name="keywords" content={data.hiredotnetdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle=".NET Developers"
        PageBannerContent="<p>.Net is considered to be the most preferred technology that is introduced by Microsoft technology to acquire the business industries like financial companies of banking, insurance, fintech, logistic, security and much more. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-Dot-NET-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Let success make noise"
      IntroMainTitle="Along with having the finest knowledge in specific industries, we believe in listening and going into deep research before initiating the project. "
      IntroContent='
      <p>Hire .NET developers, observe the magical move in your business Empower your financial business with the Microsoft technology stack</p>
      <p>Considering the enterprise business has the larger business requirements which surely is time-consuming but it only happens when there is a lack of updated technical resources for development which ultimately comes with multiple challenges.</p>
      <p>Webenix is found to be authentic considering the .NET development services going industry specific with the same. We have a team of Microsoft-certified developers to help your business through their skills and professionalism in development globally.</p>
      <p>Hire .NET developers from Webenix and get competitive prices with the timely completion of projects. </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIREDOTNETDEVELOPER