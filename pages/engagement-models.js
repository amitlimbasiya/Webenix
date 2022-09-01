import React from 'react';
import { Container } from "react-bootstrap";
import EngagementModel from '../components/EngagementModel';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';
import * as s from "../styles/components/EngagementModel/EngagementModel.style";
import Head from 'next/head';
import { data } from "../data/Seo";

const EngagementModels = () => {
  return (
    <>
      <Head>
        <title>{data.engagementmodels.title}</title>
        <meta name="description" content={data.engagementmodels.description}/>
        <meta name="keywords" content={data.engagementmodels.keyword} />
      </Head>
      <PageBanner 
            PageBannerBigTitle="Engagement"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle="Our"
            PageBannerGreenUnderlineText="Engagement Models"
        />
      <SectionIntro 
        IntroSubTitle="We are available globally"
        IntroMainTitle="Your one-stop solution for any digital assistance."
        IntroContent='
          <p>Webenix is providing mobile and web application services for over a decade now. With the most enthusiastic team of developers profound in every technical stack dedicates their skill to outgrow your business. We aim to fulfil your business vision by bringing efficiency into action. By providing daily updates, we make sure our clients and customers get real-time updates</p>
          <p>We aim to uplift digitalisation and motivation in the business. When the efforts meet endeavours, we celebrate success by aiming and targeting better goals. </p>
      '/>
      <s.SectionTagline>
        <Container>
          <span className="before-dash">Our Engagement Model</span>
          <h2>Revolve around <br/>our engagement model.</h2>
        </Container>
      </s.SectionTagline>
      <EngagementModel 
        EngagementClass="engagementmodel-row"
        EngagementModelImage="/images/Dedicated-01.svg"     
        EngagementModelImageWidth="705"
        EngagementModelImageHeight="410"  
        EngagementMainTitle="Direct Approach"    
        EngagementModelIcon="/images/hybrid-model-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName="Dedicated Resource"
        EngagementContent='
          <p>The model is mostly preferred by enterprise projects, as it is curated for local project management and offshore development.</p>
          <ul>
            <li>No time zone restriction.</li>
            <li>Communication gap resolved.</li>
            <li>Cost-effective.</li>
            <li>No loosing of quality control.</li>
            <li>Highly customisable.</li>
            <li>Scaled over Flexibility.</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagementmodel-alt engagement-green-titlebg"
        EngagementModelImage="/images/Time-01.svg"     
        EngagementModelImageWidth="854"
        EngagementModelImageHeight="548"  
        EngagementMainTitle="Hourly Base"    
        EngagementModelIcon="/images/flexibility-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName="Time and Material"
        EngagementContent='
          <p>Do not invest in hiring the team for developing any product for you, in fact, get in touch with us and hire the best candidates for your desired technology stack on an hourly, daily or contract basis may it be small or large scale project, we will be always happy to assist. </p>
          <ul>
            <li>Scale down team resources only when business needs. </li>
            <li>Parallel work can be done on single or multiple projects.</li>
            <li>Deep control over costing.</li>
            <li>Real-time updates and reporting.</li>
            <li>Dedicated team working for your business project.</li>
            <li>Agile ideas and their implementation</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagement-orange-titlebg mb-5"
        EngagementModelImage="/images/FixedModel-01.svg"     
        EngagementModelImageWidth="705"
        EngagementModelImageHeight="410"  
        EngagementMainTitle="Turnkey Solutions"
        EngagementModelIcon="/images/fixed-cost-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName="Fixed Model Solution"
        EngagementContent='
          <p>It is a dedicated requirement of the project needs and its specification. It is pre-stated about the time that will be taken to complete the project, and ultimately knowing the fixed cost estimation. If you are a small or medium-scale business platform, then this is the right model for you. </p>
          <ul>
            <li>Applicable for a well-defined project.</li>
            <li>Fixed team allocation according to project size.</li>
            <li>Payment with completion of milestone.</li>
            <li>Highly customisable.</li>
            <li>End-to-end service completion to customers.</li>
          </ul>
      '/>
      <TechnologyStack/>
      <SteptoEngage/>
    </>
  )
}

export default EngagementModels