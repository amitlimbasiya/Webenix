import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import MoreResource from '../components/MoreResource';
import WhyUs from '../components/WhyUs';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';

const About = () => {
  return (
    <>
      <PageBanner 
        PageBannerClass="pagebanner-section"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Meet"
        PageBannerGreenTitle="Webenix!"
        PageBannerContent="Webenix was founded in the year 2018 with a clear vision in mind of providing the best to our customers. Not only do we firmly believe in serving our best work but we make sure to always respect our customer’s time by immediate responses with solutions globally accommodating time zone. Meeting the expectations of our customers, they will always have the best user experience." 
        PageBannerBtnText="Know More"       
        PageBannerImageWidth="600px"
        PageBannerImageHeight="495px"
        PageBannerImage="/images/pagebg-about.svg"/>
      <SectionIntro 
          IntroSubTitle="rahul An agency just like you!"
          IntroMainTitle="Find Everything Under One Roof At WEBENIX."
          IntroContent='
            <h3></h3>
            <p>If you want to build the IT sources but cannot find the right team for it? Well, do not just worry about it as we at WEBENIX are here with a highly skilled and qualified developing team. Having the best command and expertise in the various programming languages, platforms, and frameworks we have got it all covered for you. </p>
            <p>We believe in saving your time, and yet staying consistent in delivering the best product is what we aim for at WEBENIX. It is the <strong>web development outsourcing</strong> company that you have always desired in the business to have.</p>
      '/>
      <MoreResource/>
      <WhyUs/>
      <HireServies/>
      <Blog/>
      </>
  )
}

export default About