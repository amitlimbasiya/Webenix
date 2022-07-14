import React from 'react'
import PageBanner from '../components/WebDevelopmentPage/PageBanner';
import SectionIntro from '../components/WebDevelopmentPage/SectionIntro';
import ServiceFeatureBox from '../components/ServiceFeatureBox';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const WEBDEVELOPMENT = () => {
  return (
    <>
    <PageBanner/>
    <SectionIntro/>
    <ServiceFeatureBox/>
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/> 
    <Blog/>
    </>
  )
}

export default WEBDEVELOPMENT