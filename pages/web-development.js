import React from 'react'
import PageBanner from '../components/WebDevelopmentPage/PageBanner';
import SectionIntro from '../components/WebDevelopmentPage/SectionIntro';
import SectionServiceBoxes from '../components/WebDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/WebDevelopmentPage/SteptoEngage';
import TechnologyStack from '../components/WebDevelopmentPage/TechnologyStack';

const WEBDEVELOPMENT = () => {
  return (
    <>
    <PageBanner/>
    <SectionIntro/>
    <SectionServiceBoxes/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default WEBDEVELOPMENT