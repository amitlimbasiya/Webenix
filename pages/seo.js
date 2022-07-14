import React from 'react'
import PageBanner from '../components/SEOPage/PageBanner';
import SectionIntro from '../components/SEOPage/SectionIntro';
import SectionServiceBoxes from '../components/SEOPage/ServiceBoxes';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const SEO = () => {
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

export default SEO