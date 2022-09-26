import React from 'react';
import EngagementModel from '../components/EngagementModel';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import Head from 'next/head';
import { data } from "../data/Seo";

const Confidentiality = () => {
  return (
    <>
      <Head>
        <title>{data.confidentiality.title}</title>
        <meta name="description" content={data.confidentiality.description}/>
        <meta name="keywords" content={data.confidentiality.keyword} />
      </Head>
      <PageBanner 
            PageBannerBigTitle="CONFIDENTIAL"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle="We are Highly"
            PageBannerGreenUnderlineText="CONFIDENTIAL"
        />
      <SectionIntro 
        IntroSubTitle="Our Priority"
        IntroMainTitle="Confidentiality is our priority!"
        IntroContent='
          <p>Confidentiality is the most important aspect before working forward with our customers because software development consists of strategies and assets that should come under the non-disclosure act. Our customers have 100% resource access to the source code and ownership along with the intellectual property rights as soon as they sign up to work with us.</p>
          <p>We have signed for a lot of enterprise agencies, bootstrapped startup companies, and entrepreneurs globally where it is conditioned with the legal governance, risk management and compliances ensuring to create the most secure environment for our customers to provide 100% confidentiality.</p>
        '/>
      <EngagementModel 
        EngagementClass="engagementmodel-row custom-margin engagement-pink-titlebg"
        EngagementModelImage="/images/NDA-01.svg"     
        EngagementModelImageWidth="750"
        EngagementModelImageHeight="338"  
        EngagementMainTitle="Non-Disclosure Agreement"    
        EngagementModelName=""
        EngagementContent='         
          <ul>
            <li>As a part of the Webenix recruitment and hiring process, our employee&#39;s signs in the legal non-disclosure agreement about not disclosing any proprietary information outside the premises.</li>
            <li>Any information that will be delivered to employees while working directly with clients is strictly prohibited to disclose or use somewhere else.</li>
            <li>For safeguarding in the most secure ways we sign the NDA for employees as well as for our customers.</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagementmodel-alt engagement-green-titlebg custom-margin"
        EngagementModelImage="/images/Technical-01.svg"     
        EngagementModelImageWidth="403"
        EngagementModelImageHeight="380"  
        EngagementMainTitle="Technical Security"    
        EngagementModelName=""
        EngagementContent='
          <ul>
            <li>Highend Firewalls and switches</li>
            <li>Latest AntiVirus in all Workstations</li>
            <li>Monitoring Software</li>
            <li>Authorized access in network</li>
            <li>Encrypted Data Sharing</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagement-orange-titlebg custom-margin"
        EngagementModelImage="/images/Infrastructure-01.svg"     
        EngagementModelImageWidth="450"
        EngagementModelImageHeight="453"  
        EngagementMainTitle="Infrastructure physical security"
        EngagementModelName=""
        EngagementContent='
          <ul>
            <li>CCTV Surveillance</li>
            <li>Biometric system for In and Out</li>
            <li>Fire alarm and sprinkler</li>
            <li>UPS for power backup</li>
          </ul>
      '/>
    </>
  )
}

export default Confidentiality