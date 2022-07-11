import React from 'react'
import PageBanner from '../components/WordpressDevelopment/PageBanner';
import SectionIntro from '../components/WordpressDevelopment/SectionIntro';
import SectionServiceBoxes from '../components/WordpressDevelopment/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/WordpressDevelopment/SteptoEngage';
import TechnologyStack from '../components/WordpressDevelopment/TechnologyStack';

const WORDPRESSDEVELOPMENT = () => {
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

export default WORDPRESSDEVELOPMENT