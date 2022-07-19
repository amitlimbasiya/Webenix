import React from 'react'
import PageBanner from '../components/ResponsiveWebDesign/PageBanner';
import SectionIntro from '../components/ResponsiveWebDesign/SectionIntro';
import OurExpertise from '../components/ResponsiveWebDesign/OurExpertise';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const RESPONSIVEWEBDESIGN = () => {
  return (
    <>
      <PageBanner/>
      <SectionIntro/>
      <OurExpertise/>
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default RESPONSIVEWEBDESIGN