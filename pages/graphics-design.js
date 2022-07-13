import React from 'react'
import PageBanner from '../components/GraphicsDesignPage/PageBanner';
import SectionIntro from '../components/GraphicsDesignPage/SectionIntro';
import SectionServiceBoxes from '../components/GraphicsDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const GRAPHICSDESIGN = () => {
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

export default GRAPHICSDESIGN