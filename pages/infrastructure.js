import React from 'react';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import InfrastructureOffice from '../components/InfrastructureOffice';
import TechnologyStack from '../components/TechnologyStack';
import Blog from '../components/Blog';
import OurAmbience from '../components/OurAmbience';
import Head from 'next/head';
import { data } from "../data/Seo";
const About = () => {
  return (
    <>
      <Head>
        <title>{data.infrastructure.title}</title>
        <meta name="description" content={data.infrastructure.description}/>
        <meta name="keywords" content={data.infrastructure.keyword} />
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section top-bottom infraBg"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Infrastructure"
        PageBannerGreenUnderlineText="@WEBENIX"
        PageBannerBigTitle="Infra"
      />
      <SectionIntro 
          IntroSubTitle="State-of-the-art infrastructure"
          IntroMainTitle="At Webenix, we are proud of our state-of-the-art infrastructure that enables us to deliver high-quality services to our clients."
        IntroContent="
            <p>Our team of designers and developers works in a modern and spacious office equipped with the latest technology and tools. This allows us to work efficiently and effectively, and deliver web design solutions that meet the highest standards.</p>
            <p>In addition to our physical infrastructure, we also have a robust digital infrastructure that includes advanced software and systems for project management, collaboration, and communication. This ensures that our team can work seamlessly across different locations and time zones, and deliver timely and consistent results to our clients.</p>
            <p>Our digital infrastructure also includes multiple layers of security to protect our clients' data and confidential information. Overall, our infrastructure is an integral part of our ability to provide exceptional web design services to our clients.</p>
      "/>
      <InfrastructureOffice
        sectionSubTitle="Take a look at"
        sectionTitle="Our Office"
        InfoBoxTitle01="Area"
        InfoBoxValue01="1200 sqft."
        InfoBoxTitle02="Strength"
        InfoBoxValue02="15+"
        InfoBoxTitle03="Capacity"
        InfoBoxValue03="30+"
        Listpoints='
          <li>Over 1,200 Sq. Ft of state-of-the-art development center</li>
          <li>Currently housing team of 15+</li>
          <li>Expandable capacity of 30+ employees</li>
          <li>Open seating for cross team collaboration</li>
          <li>24 x 7 Power through Torrent (private electric provider)</li>
          <li>Backup Power via UPS and Generators</li>
          <li>200 Sq. Ft of recreation and gaming area</li>'
        ImageClassName="rellimage neverstoplearning office_bg"

        RightsectionSubTitle="Take a look at"
        RightsectionTitle="Security & Surveillance"
        RightListpoints='
          <li>High Definition CCTV Surveillance</li>
          <li>Biometric Access Control</li>
          <li>Certified Security Personnel</li>
          <li>VPN Implementation</li>
          <li>Disaster recovery provision</li>
          <li>Advanced software for monitoring servers</li>'
          RightImageClassName="rellimage neverstoplearning mt-0 ms-0 security_bg"
         />

      <InfrastructureOffice
        sectionSubTitle="Take a look at"
        sectionTitle="Devices"               
        Listpoints='
          <li>Intel i7, i9 processor based high speed Desktops</li>
          <li>iMac Pro, iMac, Macbook</li>
          <li>2 High Speed Internet</li>
          <li>Smartphones across different OS</li>
          <li>Backup Power via UPS and Generators</li>'
        ImageClassName="rellimage neverstoplearning devices_bg"

        RightsectionSubTitle="Take a look at"
        RightsectionTitle="Networks & Servers"
        RightListpoints='
          <li>2 Colud VPS Servers</li>
          <li>Amazon Cloud Infrastructure</li>
          <li>CAT6 Network Cables</li>
          <li>Cisco Firewall</li>
          <li>HighEnd Routers & Switches</li>'
          RightImageClassName="rellimage neverstoplearning mt-0 ms-0 networks_bg"
         />

      <OurAmbience/>
      <TechnologyStack
        SectionClass="pb-5"
      />
      
      <Blog/>
      </>
  )
}

export default About