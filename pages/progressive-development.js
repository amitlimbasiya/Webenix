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

const PROGRESSIVEDEVELOPMENT = () => {

  const [ServiceData, setServiceData] = useState([]);
  useEffect(() => {
    const services = [
      {
        key:1,
        ServiceBoxClass:"blushPart",
        ServiceIcon:"/images/f-Mobile-App-Design.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.69 179.26"><defs></defs><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M191.8,262.85c-20.53,1.32-32.31-45-41.43-53.19-17.88-16.12-54.46-22.79-33.83-42.63,9.54-9.18,27.16-20.29,34.64-27.5C166.3,125,155,88.11,175.64,84.06s30.14,20.79,45.89,32.51c10.44,7.76,23.57,9,34.84,14.72,7.76,3.9,12.35,15.13,5.08,22.7C216.45,200.85,226.61,260.61,191.8,262.85Z" transform="translate(-110.41 -83.62)"/></g></g></svg>',
        ServiceName:"Progressive App <br>Development"
      },
      {
        key:2,
        ServiceBoxClass:"purplePart",
        ServiceIcon:"/images/f-progressive-web-app-development-icon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.51 145.95"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M85.19,343.65c-33.57,51.44,30.58,75.1,71.14,75.1,39.9,0,85-15.05,85-61.3C241.31,238.4,142.82,255.38,85.19,343.65Z" transform="translate(-75.8 -272.8)"/></g></g></svg>',
        ServiceName:"Progressive App  <br> Customization"
      },
      {
        key:3,
        ServiceBoxClass:"PlatinumPart",
        ServiceIcon:"/images/f-support-maintanance-icon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.06 161.27"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M164.87-57.64c0,43.16,25.6,58.53,38.69,33.24,10.1-19.49,22.46-15.17,45-12.76,23.14,2.48,29.6-28.57,49.89-35.9,34.33-12.4,10.67-32.18-5.23-45.33s-7.81-41-31.63-53.36c-19.35-10.08-25.41,27.43-59.78,41.05C155.2-112.2,164.87-96.83,164.87-57.64Z" transform="translate(-164.04 173.45)"/></g></g></svg>',
        ServiceName:"Progressive App <br> Support & Maintenance"
      },        
      {
        key:4,
        ServiceBoxClass:"carolinaBluePart",
        ServiceIcon:"/images/f-Third-Party-Integration-icon.svg",
        ServiceIconHeight:"90px",
        ServiceIconWidth:"90px",
        ServiceSvgShape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.57 136.84"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M490.89,413.52c-18.76,10.83-34.58-6.41-50.21-16.83-30.65-20.42-75.83,10.44-97.57-30.12-24.07-44.91,0-89.51,46.56-86.28C520,289.33,507.93,403.68,490.89,413.52Z" transform="translate(-333.63 -280.12)"/></g></g></svg>',
        ServiceName:"Progressive App<br> API Integration"
      }
      ];
    setServiceData(services);
  }, []);
  return (
    <>
      <Head>
        <title>{data.progressivedevelopment.title}</title>
        <meta name="description" content={data.progressivedevelopment.description}/>
        <meta name="keywords" content={data.progressivedevelopment.keyword} />
      </Head>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgHawkesBlue pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Progressive web app"
        PageBannerGreenTitle="Development"
        PageBannerContent="<p>Get a wider outreach for your business by providing the most trending Progressive Web Apps. We provide your business with an extraordinary experience by developing sleek web apps over multiple platforms that consist of the most required features for users to use. </p>"
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/f-progressive-web-app-development-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section separatorPart noiseBg"
      IntroSubTitle="Create something your customers love to watch"
      IntroMainTitle="Get the best mobile and web app through Progressive web app development services."
      IntroContent='
      <p>With the ever-growing competition in the digital world, we try to make your business interaction effortless considering the development of the best progressive web apps.</p>
      <p>We are a <strong>Progressive Web App Development Company</strong> that cuts off the limitations that slow down the progress in the business where Progressive Web App is rescued for the best. For implementing today’s needs we ask the business to develop the limited boundaries of the Native Mobile Apps and conventional websites to blend the tech fast requirements. We help you in unlocking the solutions with the best tech features.</p>
    '/>
    <ServiceFeatureBox
      sectionTagLine="Our Expertise"
      sectionMainTitle="Our Progressive Web App Development Services"
        ServiceValue={ServiceData}          
      />  
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default PROGRESSIVEDEVELOPMENT