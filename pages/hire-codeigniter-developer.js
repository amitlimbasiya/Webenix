import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HirePHPDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';


const HIRCODEIGNITERDEVELOPER = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Codeigniter Developers"
        PageBannerContent="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/hire-codeigniter-designer.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="We help you grow"
      IntroMainTitle="Hire a Codeigniter developer for creating small footprints!"
      IntroContent='
      <p>Codeignitor is generally used when there is less action to be performed like sending emails, updating, managing files and other smaller things that helps in managing small tasks in the business. When you hire a Codeignitor developer from Webenix it takes care of the initial process to the last that includes the whole managing core activity of the business throughout.</p>
      <p><strong>Win wows, get the small achievements by converting ideas into solutions.</strong></p>
      <p>There are so many factors that are included when it comes to the Codeignitor developing if the business is expected the blazingly fast and MVC Architecture in the business. We know that our developers cannot disappoint you when it comes to the development of Codeignitor.</p>
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