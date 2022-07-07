import React from 'react'
import PageBanner from '../components/AboutPage/PageBanner';
import SectionIntro from '../components/AboutPage/SectionIntro';
import MoreResource from '../components/AboutPage/MoreResource';
import WhyUs from '../components/AboutPage/WhyUs';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';

const About = () => {
  return (
    <>
      <PageBanner/>
      <SectionIntro/>
      <MoreResource/>
      <WhyUs/>
      <HireServies/>
      <Blog/>
      </>
  )
}

export default About