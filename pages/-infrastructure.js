import React from 'react'
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import InfrastructureOffice from '../components/InfrastructureOffice';
import TechnologyStack from '../components/TechnologyStack';
import Blog from '../components/Blog';

const About = () => {
  return (
    <>
      <PageBanner 
        PageBannerBigTitle="Infra"
        PageBannerClass="pagebanner-section top-bottom infraBg"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Infrastructure"
        PageBannerGreenUnderlineText="@WEBENIX"
      />
      <SectionIntro 
          IntroSubTitle="Flexibility at its pace"
          IntroMainTitle="“Modernizing and facilitating teams with high-tech advancing infrastructure powerhouse is always top priority considering the type of data rich, performance driven, security centric enterprise grade platforms we deliver.”"
          IntroContent='
            <p>An essential goal for WEBENIX is sustainable growth, aggravating at a pace with smooth operations, whether for their clients or their internal team. To walk parallely with this goal, we provide a culture with high secured IT space. Our premium IT infrastructure focuses on maintaining agile infrastructure, availing the top facilities of cloud computing and latest hardwares and software.</p>
      '/>
      <InfrastructureOffice 
        PageBannerClass="pagebanner-section"
      />
      <TechnologyStack
        PageBannerClass="technologystack-section noBg"
      />
      <Blog/>
      </>
  )
}

export default About