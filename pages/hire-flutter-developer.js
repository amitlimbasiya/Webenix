import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireFlutterDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireFlutterDeveloper = () => {
  return (
    <>
       <Head>
        <title>{data.hireflutterdeveloper.title}</title>
        <meta name="description" content={data.hireflutterdeveloper.description}/>
        <meta name="keywords" content={data.hireflutterdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgHawkesBlue noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Flutter Developers"
        PageBannerContent="<p>Webinix has been working with the Flutter development from the initial days and with the technology that is backed up by Google, it is considered to be one of the most demanded technologies. Considering the most powerful technology and cross-platform, we have the most skilful team in Flutter development.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-Flutter-Icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Harness the mobility"
      IntroMainTitle="Explore the most demanded cross-platform."
      IntroContent='
      <p>Leverage creativity and build concepts and experience native-like apps.</p>
      <p>The revolutionary launch by the Google-Flutter is one of the best cross-platforms that has set the highest records for developers using it for giving the Native touch for developing mobile applications.  Build the most sophisticated mobile apps, with easy and attractive interfaces.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireFlutterDeveloper