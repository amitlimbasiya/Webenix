import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import MoreResource from '../components/MoreResource';
import WhyUs from '../components/WhyUs';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import Head from 'next/head';
import { data } from "../data/Seo";

const About = () => {
  return (
    <>
      <Head>
        <title>{data.about.title}</title>
        <meta name="description" content={data.about.description}/>
        <meta name="keywords" content={data.about.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section aboutBg"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Meet"
        PageBannerGreenTitle="Webenix!"
        PageBannerContent="If you are a web agency looking for a reliable and trusted outsourcing partner, look no further than <strong>Webenix</strong>. Our team is ready to help you grow your business and achieve success." 
        PageBannerBtnText="Know More"       
        PageBannerImageWidth="600px"
        PageBannerImageHeight="495px"
        PageBannerImage="/images/f-Meet-Webenix.svg"/>
      <SectionIntro 
          IntroSubTitle="An agency just like you!"
          IntroMainTitle="Find Everything Under One Roof At WEBENIX."
          IntroContent='
            <h3></h3>
            <p>Webenix was founded in 2018 with the goal of providing top-quality white label outsourcing services to web agencies around the globe. Our team of dedicated designers and developers are committed to delivering high-quality work, on time, and with excellent communication.</p>
            <p>As a white label outsourcing service provider, we understand the importance of building strong relationships with our clients. We work closely with them to understand their needs and goals, and provide customized solutions to meet those needs. Our focus on quality, timeliness, and good communication has earned us the trust and loyalty of our clients.</p>
      '/>
      <MoreResource/>
      <WhyUs/>
      <HireServies/>
      <Blog/>
      </>
  )
}
export default About