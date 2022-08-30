import React, {useEffect, useState}  from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import ServiceFeatureBox from '../components/ServiceFeatureBox';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import Head from 'next/head';
import { data } from "../data/Seo";

const NEXTJSDEVELOPMENT = () => {
  const [ServiceData, setServiceData] = useState([]);
  useEffect(() => {
    const services = [
      {
        key:1,
        ServiceBoxClass:"yellowPart",
        ServiceIcon:"/images/nodejsDevelopment/apiDevIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.69 179.26"><defs></defs><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M191.8,262.85c-20.53,1.32-32.31-45-41.43-53.19-17.88-16.12-54.46-22.79-33.83-42.63,9.54-9.18,27.16-20.29,34.64-27.5C166.3,125,155,88.11,175.64,84.06s30.14,20.79,45.89,32.51c10.44,7.76,23.57,9,34.84,14.72,7.76,3.9,12.35,15.13,5.08,22.7C216.45,200.85,226.61,260.61,191.8,262.85Z" transform="translate(-110.41 -83.62)"/></g></g></svg>',
        ServiceName:"Next JS <br/>development"
      },
      {
        key:2,
        ServiceBoxClass:"carolinaBluePart",
        ServiceIcon:"/images/nodejsDevelopment/frontEndDevelopmentIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.51 145.95"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M85.19,343.65c-33.57,51.44,30.58,75.1,71.14,75.1,39.9,0,85-15.05,85-61.3C241.31,238.4,142.82,255.38,85.19,343.65Z" transform="translate(-75.8 -272.8)"/></g></g></svg>',
        ServiceName:"Next JS <br/>Frontend development"
      },
      {
        key:3,
        ServiceBoxClass:"saffronPart",
        ServiceIcon:"/images/nodejsDevelopment/serverSideIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.06 161.27"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M164.87-57.64c0,43.16,25.6,58.53,38.69,33.24,10.1-19.49,22.46-15.17,45-12.76,23.14,2.48,29.6-28.57,49.89-35.9,34.33-12.4,10.67-32.18-5.23-45.33s-7.81-41-31.63-53.36c-19.35-10.08-25.41,27.43-59.78,41.05C155.2-112.2,164.87-96.83,164.87-57.64Z" transform="translate(-164.04 173.45)"/></g></g></svg>',
        ServiceName:"Next JS <br/>Web development"
      },        
      {
        key:4,
        ServiceBoxClass:"PlatinumPart",
        ServiceIcon:"/images/wordpressDevelopment/pluginIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.57 136.84"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M490.89,413.52c-18.76,10.83-34.58-6.41-50.21-16.83-30.65-20.42-75.83,10.44-97.57-30.12-24.07-44.91,0-89.51,46.56-86.28C520,289.33,507.93,403.68,490.89,413.52Z" transform="translate(-333.63 -280.12)"/></g></g></svg>',
        ServiceName:"Next JS <br/>maintenance"
      }
      ];
    setServiceData(services);
  }, []);
  return (
    <>
      <Head>
        <title>{data.nextjsdevelopment.title}</title>
        <meta name="description" content={data.nextjsdevelopment.description}/>
        <meta name="keywords" content={data.nextjsdevelopment.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgPlatinum pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Lorem "
        PageBannerGreenTitle="ipsum"
        PageBannerContent="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/express-js-banner-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="The standard Lorem Ipsum passage"
      IntroMainTitle="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
      IntroContent='
      <p>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
    '/>
      <ServiceFeatureBox
        sectionTagLine="Our Expertise"
        sectionMainTitle="Next JS Development Services"
        ServiceValue={ServiceData}          
      />
      <HireServies/>
      <TechnologyStack/>
      <SteptoEngage/>
      <Blog/>
    </>
  )
}

export default NEXTJSDEVELOPMENT