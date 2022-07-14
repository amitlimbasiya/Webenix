import React from 'react'
import PageBanner from '../components/UIUXDesignPage/PageBanner';
import SectionIntro from '../components/UIUXDesignPage/SectionIntro';
import SectionServiceBoxes from '../components/UIUXDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import TechnologyStack from '../components/TechnologyStack';
import SteptoEngage from '../components/SteptoEngage';

const UIUX = () => {
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

export default UIUX