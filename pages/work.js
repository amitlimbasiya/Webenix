import React from 'react';
import PageBanner from '../components/PageBanner3';
import PortfolioListing from '../components/PortfolioListing';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const work = () => {
  return (
    <>
      <Head>
        <title>{data.work.title}</title>
        <meta name="description" content={data.work.description}/>
        <meta name="keywords" content={data.work.keyword} />
      </Head>
      <PageBanner 
          headingClass="greenBrd"
          PageBannerBigTitle="WORK"
          PageBannerClass="pagebanner-section lightPurplBg noiseBg smallPart"
          PageBannerImgClass="pagebannerimg-col at-right-bottom" 
          PageBannerTitle="Our Work"
          PageBannerGreenUnderlineText=""
      />
      <PortfolioListing/>
      <TechnologyStack
        SectionClass="pb-0"
      />
    </>
  )
}
export default work