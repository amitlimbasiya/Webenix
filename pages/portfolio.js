import React from 'react';
import PageBanner from '../components/PageBanner3';
import PortfolioListing from '../components/PortfolioListing';
import TechnologyStack from '../components/TechnologyStack';

const portfolio = () => {
  return (
    <>
        <PageBanner 
            PageBannerBigTitle="WORK"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg smallPart"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle=""
            PageBannerGreenUnderlineText="Our Work"
        />
        <PortfolioListing/>
        <TechnologyStack
          SectionClass="pb-0"
        />

    </>
  )
}

export default portfolio