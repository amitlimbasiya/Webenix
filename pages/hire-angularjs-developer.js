import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HiringModels from '../components/HiringModels';
import OurExpertise from '../components/HireAngularJSDeveloper/OurExpertise';
import Benefits from '../components/Benefits';
import FAQAccordion from '../components/FAQAccordion';
import Blog from '../components/Blog';

const HireAngularJSDeveloper = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section bgMistyRose noiseBg"
        PageBannerImgClass="pagebannerimg-col right-bottom-img" 
        PageBannerTitle="Hire"
        PageBannerGreenTitle="Angular JS Developers"
        PageBannerContent="<p>Our experts in Angular Development have been creating the best mobile apps that are powered by Google with a strong foundation. We have been developing and re-developing with the best development for multiple agencies and companies. For building powerful front-end mobile app development, Angular JS remains the best choice.</p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="391px"
        PageBannerImageHeight="403px"
        PageBannerImage="/images/angularJsBannerIcon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Get in touch with the best Angular Development"
      IntroMainTitle="You are in the right hands for creating the best front-end applications with Angular JS technology"
      IntroContent='
      <p><strong>Let us craft strong front-end successful stories.</strong> <br/>What is the real impression of your successful mobile app? When you consider the best mobile app solution where your users use and visit it frequently, it is considered to be successful creation of the mobile application. The front-end development matters a lot which has the best functionality along with the clean design.</p>
      <p>Fortunately, our knowledgeable Angular JS developers behold the fact of creating quality mobile app development for your business is what we aim for. Get in touch with us whether you want the agile team support or some technical assistance, we are there for you to build jaw-dropping, highly secured and flexible performing apps.</p>
    '/>
      <HiringModels/>
      <OurExpertise/>
      <Benefits/>
      <FAQAccordion/>
      <Blog/>
    </>
  );
};

export default HireAngularJSDeveloper