import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireLaravelDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HIRLARAVELDEVELOPER = () => {
  return (
    <>
      <Head>
        <title>{data.hirlaraveldeveloper.title}</title>
        <meta name="description" content={data.hirlaraveldeveloper.description}/>
        <meta name="keywords" content={data.hirlaraveldeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Laravel Developers"
        PageBannerContent="<p>If you are looking for the best PHP-centric software, Laravel is considered to be the first choice in the PHP framework. For businesses who are looking for a performance-centric platform, PHP Laravel is considered to be the best one. We at Webenix have the best hands-on building industry-specific using Laravel frameworks.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/laravel-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="We are here throughout"
      IntroMainTitle="Hire from Webenix to create the best programming Laravel Development Services. "
      IntroContent='
      <p>Having hands on the PHP Laravel framework for over a decade now, we urge you to build custom web development.</p>
      <p>We have a mission and dedicated driven developers team to get the best results in your business.</p>
      <p><strong>Develop modern web development with Laravel Framework</strong></p>
      <p>Laravel is mostly used for developing the recognized industry which is an enterprise and needs the best performance. We have been working with Laravel from the beginning of version 1.0 till 6.0 where we have created endless dynamic platforms.</p>
      <p>Our team of dedicated Laravel Developers uses the best methods to provide industry-centric solutions that exclusively work the best as per the business requirements.</p>
      <p>Work with the best experienced Laravel Developers for building the best development services ensuring the timely delivery of the projects because we value your time. </p>
      <p>Create a success story by hiring the best developers from Webenix. </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRLARAVELDEVELOPER