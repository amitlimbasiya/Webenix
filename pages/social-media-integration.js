import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import OurExpertise from '../components/SMIPage/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const SMI = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgHawkesBlue pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Social Media Integration"
        PageBannerContent="<strong>Make connecting globally easier through social media integration</strong> Social media rules the world today, networking is everywhere no matter what industry. When it comes to running a business it needs maximum visibility amongst customers and that's where social media networking takes place. Looking for integration in your website or your mobile application? Well, let us do our best job to make the integration simpler and much more accessible through us. Utilize the power of social media right from your platform." 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/outsourcing-India.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our Integration Expertise"
      IntroMainTitle="Focus on growing business, leave technicity on us"
      IntroContent='
      <p>When it comes to the social media API integration, which has become the most crucial part of any business to run, we help in integrating it on your website and mobile application. The whole business process becomes effortless by easy social sharing of content. </p>
      <p>We at Webenix, help to bring the industry-specific social media API integration services to help businesses over websites and mobile apps to integrate into the finest ways possible. Social media includes Facebook, Twitter, LinkedIn, Instagram, Youtube and several specific others.</p>
    '/>
    <OurExpertise/>
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our Mission"
      IntroMainTitle="Grow your business with social media API integration"
      IntroContent='
      <p>Acquire your target audience everywhere through social media integration and so we urge you to provide highly reliable and compatible industry-centric social media API integration services that are perfect for your website or mobile application. Unleash the power of social media presence and social media marketing for easy connecting with your audience.</p>
      <p>Do you want to help in utilizing social media power in the best ways? Webenix has the social media API integration experts that help in social engagement with your customers.</p>
    '/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default SMI