import React from 'react'
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import InfrastructureOffice from '../components/InfrastructureOffice';
import TechnologyStack from '../components/TechnologyStack';
import Blog from '../components/Blog';
import OurAmbience from '../components/OurAmbience';

const About = () => {
  return (
    <>
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
            <p>We aim to provide a sustainable growth structure, whether it is for our valuable customers or for the internal team. It is important to be on the same page and so we aim to keep the similar vision with the highly secured IT space. Our IT premise provides the best infrastructure that mainly focuses on cloud computing and the latest equipped hardware and software.</p>
      '/>
      <InfrastructureOffice
        sectionSubTitle="Take a look at"
        sectionTitle="Our Office"
        InfoBoxTitle01="Area"
        InfoBoxValue01="1200 sqft."
        InfoBoxTitle02="Strength"
        InfoBoxValue02="25+"
        InfoBoxTitle03="Capacity"
        InfoBoxValue03="50+"
        Listpoints='
          <li>Over 1,200 Sq. Ft of state-of-the-art development center</li>
          <li>Currently housing team of 25+ CMARIans</li>
          <li>Expandable capacity of 50+ employees</li>
          <li>Open seating for cross team collaboration</li>
          <li>Green energy conservation systems</li>
          <li>24 x 7 Power through Torrent (private electric provider)</li>
          <li>Backup Power via UPS and Generators</li>
          <li>2000 Sq. Ft of recreation and gaming area</li>
          <li>Additional 10,000 Sq. Ft+ of scalable office infrastructure</li>'
        ImageClassName="rellimage neverstoplearning"

        RightsectionSubTitle="Take a look at"
        RightsectionTitle="Security & Surveillance"
        RightListpoints='
          <li>High Definition CCTV Surveillance</li>
          <li>Biometric Access control (COSEC PATH DCFx)</li>
          <li>Certified Security Personnel</li>
          <li>SVN Implementation</li>
          <li>Disaster recovery provision</li>
          <li>Advanced software for monitoring servers</li>
          <li>Backup Power via UPS and Generators</li>
          <li>RAID (redundant array of independent disks)</li>
          <li>NagiOS to monitor servers and applications</li>'
          RightImageClassName="rellimage neverstoplearning mt-0 ms-0"

         />

      <InfrastructureOffice
        sectionSubTitle="Take a look at"
        sectionTitle="Devices"
        InfoBoxTitle01="Smartphones"
        InfoBoxValue01="50+ in all OS"
        InfoBoxTitle02="Tablets"
        InfoBoxValue02="15+ in all OS"        
        Listpoints='
          <li>Intel i7, i9 processor based high speed Desktops</li>
          <li>iMac Pro, iMac, Macbook</li>
          <li>50+ Smartphones across different OS</li>
          <li>15+ different tablets across different OS</li>
          <li>Samsung Gear VR, Oculus Rift, Smart TVs and more</li>'
        ImageClassName="rellimage neverstoplearning"

        RightsectionSubTitle="Take a look at"
        RightsectionTitle="Networks & Servers"
        RightListpoints='
          <li>Cisco Firewall 4100 Series</li>
          <li>Cisco Catalyst 3750-X Series Switches</li>
          <li>CAT6 Network Cables</li>
          <li>IBM System x3550 M4</li>
          <li>Amazon Cloud Infrastructure</li>'
          RightImageClassName="rellimage neverstoplearning mt-0 ms-0"
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