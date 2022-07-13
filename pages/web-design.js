import React from 'react'
import PageBanner from '../components/WebDesignPage/PageBanner';
import SectionIntro from '../components/WebDesignPage/SectionIntro';
import SectionServiceBoxes from '../components/WebDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import TechnologyStack from '../components/TechnologyStack';
import SteptoEngage from '../components/SteptoEngage';


const WEBDESIGN = () => {
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

export default WEBDESIGN