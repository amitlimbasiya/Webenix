import React from 'react'
import PageBanner from '../components/AndroidAppDevelopment/PageBanner';
import SectionIntro from '../components/AndroidAppDevelopment/SectionIntro';
import ServiceFeatureBox from '../components/AndroidAppDevelopment/ServiceFeatureBox';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const ANDROIDAPPSDEVELOPMENT = () => {
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

export default ANDROIDAPPSDEVELOPMENT