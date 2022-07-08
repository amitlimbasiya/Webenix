import React from 'react'
import PageBanner from '../components/UIUXDesignPage/PageBanner';
import SectionIntro from '../components/UIUXDesignPage/SectionIntro';
import SectionServiceBoxes from '../components/UIUXDesignPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/UIUXDesignPage/SteptoEngage';
import TechnologyStack from '../components/UIUXDesignPage/TechnologyStack';

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