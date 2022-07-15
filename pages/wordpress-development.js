import React from 'react'
import PageBanner from '../components/WordpressDevelopment/PageBanner';
import SectionIntro from '../components/WordpressDevelopment/SectionIntro';
import ServiceFeatureBox from '../components/WordpressDevelopment/ServiceFeatureBox';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const WORDPRESSDEVELOPMENT = () => {
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

export default WORDPRESSDEVELOPMENT