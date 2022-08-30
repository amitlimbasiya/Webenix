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

const REACTJSDEVELOPMENT = () => {

  const [ServiceData, setServiceData] = useState([]);
  useEffect(() => {
    const services = [
      {
        key:1,
        ServiceBoxClass:"yellowPart",
        ServiceIcon:"/images/reactjsBannerIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.69 179.26"><defs></defs><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M191.8,262.85c-20.53,1.32-32.31-45-41.43-53.19-17.88-16.12-54.46-22.79-33.83-42.63,9.54-9.18,27.16-20.29,34.64-27.5C166.3,125,155,88.11,175.64,84.06s30.14,20.79,45.89,32.51c10.44,7.76,23.57,9,34.84,14.72,7.76,3.9,12.35,15.13,5.08,22.7C216.45,200.85,226.61,260.61,191.8,262.85Z" transform="translate(-110.41 -83.62)"/></g></g></svg>',
        ServiceName:"React JS <br/>Development"
      },
      {
        key:2,
        ServiceBoxClass:"carolinaBluePart",
        ServiceIcon:"/images/front-end-development-icon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.51 145.95"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M85.19,343.65c-33.57,51.44,30.58,75.1,71.14,75.1,39.9,0,85-15.05,85-61.3C241.31,238.4,142.82,255.38,85.19,343.65Z" transform="translate(-75.8 -272.8)"/></g></g></svg>',
        ServiceName:"React JS <br/>Frontend Development"
      },
      {
        key:3,
        ServiceBoxClass:"saffronPart",
        ServiceIcon:"/images/codeIcon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.06 161.27"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M164.87-57.64c0,43.16,25.6,58.53,38.69,33.24,10.1-19.49,22.46-15.17,45-12.76,23.14,2.48,29.6-28.57,49.89-35.9,34.33-12.4,10.67-32.18-5.23-45.33s-7.81-41-31.63-53.36c-19.35-10.08-25.41,27.43-59.78,41.05C155.2-112.2,164.87-96.83,164.87-57.64Z" transform="translate(-164.04 173.45)"/></g></g></svg>',
        ServiceName:"React JS <br/>Web Development"
      },        
      {
        key:4,
        ServiceBoxClass:"PlatinumPart",
        ServiceIcon:"/images/third-party-API-Integration-icon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.57 136.84"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M490.89,413.52c-18.76,10.83-34.58-6.41-50.21-16.83-30.65-20.42-75.83,10.44-97.57-30.12-24.07-44.91,0-89.51,46.56-86.28C520,289.33,507.93,403.68,490.89,413.52Z" transform="translate(-333.63 -280.12)"/></g></g></svg>',
        ServiceName:"React JS <br/>Maintenance"
      }
      ];
    setServiceData(services);
  }, []);
  return (
    <>
      <Head>
        <title>{data.reactjsdevelopment.title}</title>
        <meta name="description" content={data.reactjsdevelopment.description}/>
        <meta name="keywords" content={data.reactjsdevelopment.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgHawkesBlue pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="React JS"
        PageBannerGreenTitle="Development"
        PageBannerContent="<p>Do not worry about your application choking with the lower speed, let our expert React JS Developers build a strong component-based architecture for the better translation of the business process in real-time.</p> <p>From looking after your needs specifically, we create a strong React JS Web Application that functions smoothly and is considered to be a highly-engaging mobile app right for your business. </p></p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/reactjsBannerIcon.svg"
      />
      <SectionIntro 
        SectionIntroclassName="introuction-section separatorPart noiseBg"
        IntroSubTitle="React JS Development Services"
        IntroMainTitle="Elevate your business with the real-time robust application."
        IntroContent='
        <p>Curate your business with the best strategic application where you need a pool of talented and experienced developers. Well, you are at the right place where we help you provide your business with some extravagant user experience web applications with quick updates in real-time, swift loading, and surely high performance.</p>
        <p>Experience the high quality and strong development robust features developed by the highly experienced ReactJS Developers.</p>
      '/>
      <ServiceFeatureBox
        sectionTagLine="Our Expertise"
        sectionMainTitle="Our React JS Development Services"
        ServiceValue={ServiceData}          
      />  
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default REACTJSDEVELOPMENT