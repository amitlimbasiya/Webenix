import React from 'react'
import PageBanner from '../components/SolutionPage/PageBanner';
import SectionIntro from '../components/SolutionPage/SectionIntro';
import SectionServiceBoxes from '../components/SolutionPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const SOLUTION = () => {
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

export default SOLUTION