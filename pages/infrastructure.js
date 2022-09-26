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
          IntroSubTitle="Grow with the freedom"
          IntroMainTitle="Providing freedom and a flexible work environment, it always boosts up the motivation, in the presence of advancing infrastructure for prioritizing the type of data rich. We thrive to provide the performance driven, highly secured, and enterprise approved products and platforms."
          IntroContent='
            <p><strong>Webenix Technologies Infrastructure</strong> aims to provide a sustainable growth structure, whether it is for our valued customers or the internal team.</p>
            <p>With our data-rich, performance-driven, security-centric enterprise-grade platforms, we are always focused on modernizing and facilitating teams with high-tech advancing infrastructure powerhouses.</p>
            <p><strong>Webenix Technologies Working Environment</strong> makes sure that focuses to keep a similar vision with the highly secured IT space. Our IT premise provides the best infrastructure that is mainly based on cloud computing and the latest equipped hardware and software.</p>
      '/>
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