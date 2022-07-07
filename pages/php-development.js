import React from 'react'
import PageBanner from '../components/PHPDevelopment/PageBanner';
import SectionIntro from '../components/PHPDevelopment/SectionIntro';
import SectionServiceBoxes from '../components/PHPDevelopment/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/PHPDevelopment/SteptoEngage';
import TechnologyStack from '../components/PHPDevelopment/TechnologyStack';

const PHPDEVELOPMENT = () => {
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

export default PHPDEVELOPMENT