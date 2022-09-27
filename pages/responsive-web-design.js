import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/ResponsiveWebDesign/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const RESPONSIVEWEBDESIGN = () => {
  return (
    <>
      <Head>
        <title>{data.responsivewebdesign.title}</title>
        <meta name="description" content={data.responsivewebdesign.description}/>
        <meta name="keywords" content={data.responsivewebdesign.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgChampagne pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Responsive"
        PageBannerGreenTitle="Web Design"
        PageBannerContent="<p>Let your business be the best looking from any device screen. Reach out to larger audiences with the better placement of CTA to be perfectly visible from every screen size. Do not worry, we at Webenix have the best team for creating such a masterpiece.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-responsive-icon.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="Responsive Web Design"
        IntroMainTitle="Make your business approach clearer by designing the best responsive web designs."
        IntroContent='
          <p>Considering the user&#39;s demands and expectations, we make sure to develop the best responsive web designs. Get the maximum customer approach and market reach and earn unexpected ROI. With clear affordability, we help you cut down on unwanted expenses.</p>
          <p>Webenix is one of the most experienced companies that have impacted the maximum businesses globally and yet keep up with the design trends and customers&#39; expectations.</p>
      '/>
      <OurExpertise/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default RESPONSIVEWEBDESIGN