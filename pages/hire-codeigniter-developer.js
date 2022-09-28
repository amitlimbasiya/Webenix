import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireCodeigniterDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const HIRCODEIGNITERDEVELOPER = () => {
  return (
    <>
      <Head>
        <title>{data.hircodeigniterdeveloper.title}</title>
        <meta name="description" content={data.hircodeigniterdeveloper.description}/>
        <meta name="keywords" content={data.hircodeigniterdeveloper.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg pagebanner-align-center"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Codeigniter Developers"
        PageBannerContent="<p>Codeigniter development will help enable the project that develops faster to write code faster. By providing a rich set of libraries to the common task to interface the logical structure, we help you with the core Codeigniter development. Hire Codeigniter Developer for the better leading projects further.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="600px"
        PageBannerImageHeight="400px"
        PageBannerImage="/images/f-Hire-Codeigniter-Developers.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="We help you grow"
      IntroMainTitle="Hire a Codeigniter developer for creating small footprints!"
      IntroContent='
      <p>Codeigniter is generally used when there is less action to be performed like sending emails, updating, managing files and other smaller things that helps in managing small tasks in the business. When you hire a Codeigniter developer from Webenix it takes care of the initial process to the last that includes the whole managing core activity of the business throughout. </p>
      <p><strong>Win wows, get the small achievements by converting ideas into solutions.</strong></p>
      <p>There are so many factors that are included when it comes to the <strong>CodeIgniter Developer For Hire</strong> if the business is expected to be blazingly fast and MVC Architecture in the business. We know that our developers cannot disappoint you when it comes to the development of Codeigniter. <strong>Hire CodeIgniter Programmers</strong> for every quick update.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HIRCODEIGNITERDEVELOPER