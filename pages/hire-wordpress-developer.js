import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireWordPressDeveloperPage/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HireWordPressDeveloperPage = () => {
  return (
    <>
      <Head>
        <title>{data.hirewordpressdeveloper.title}</title>
        <meta name="description" content={data.hirewordpressdeveloper.description}/>
        <meta name="keywords" content={data.hirewordpressdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgLightGrey noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="WordPress Developer"
        PageBannerContent="<p>Going with the best content management system, we at Webinix have the most powerful team to develop world-class WordPress Developed websites with a clean and sleek design and all the after-service maintenance development. <strong>Hire Dedicated WordPress Developer</strong> now!</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-WordPress-Developer.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Work with the best CMS platform"
      IntroMainTitle="Manage your business with the most wanted CMS platform."
      IntroContent='
      <p>Embed your business on the best CMS platform for the easy management of the business content.</p>
      <p>We believe in easy content management, and thus WordPress plays the most efficient role in it. Make your business easier with an efficient <strong>Custom WordPress Development</strong> that we develop and contribute globally from one WordPress VIP Agency. </p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireWordPressDeveloperPage