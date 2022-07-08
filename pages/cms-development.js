import React from 'react'
import PageBanner from '../components/CMSDevelopmentPage/PageBanner';
import SectionIntro from '../components/CMSDevelopmentPage/SectionIntro';
import SectionServiceBoxes from '../components/CMSDevelopmentPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/CMSDevelopmentPage/SteptoEngage';
import TechnologyStack from '../components/CMSDevelopmentPage/TechnologyStack';

const CMSDEVELOPMENT = () => {
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

export default CMSDEVELOPMENT