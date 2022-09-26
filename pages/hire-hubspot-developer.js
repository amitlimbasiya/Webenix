import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireHubspotDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HirehubspotDeveloper = () => {
  return (
    <>
      <Head>
        <title>{data.hirehubspotdeveloper.title}</title>
        <meta name="description" content={data.hirehubspotdeveloper.description}/>
        <meta name="keywords" content={data.hirehubspotdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Hubspot Developers"
        PageBannerContent="<p>With the wide user experience of Hubspot development, we at Webenix create an innovation lead approach to Hubspot Development services where we cater for an extensive range of Hubspot Development COS Services.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-Hubspot-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Meet the certified developed agency"
      IntroMainTitle="We are with the Hubspot Development Services."
      IntroContent='
      <p>Webenix provides the best <strong>Hubspot Development Services</strong> consisting of the most talented Hubspot Developers that streamline your customer’s requirements. </p>
      <p><strong>Hire Hubspot Developers</strong> that will showcase the extensive talent of our developers, we thrive to not only provide <strong>Hubspot Development</strong> Services but position the monthly newsletters and marketing material for your business. Hire the best for your business with Webenix.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HirehubspotDeveloper