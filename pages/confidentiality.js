import React from 'react';
import EngagementModel from '../components/EngagementModel';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';

const Confidentiality = () => {
  return (
    <>
     
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
          <p>We have signed for a lot of enterprise agencies, bootstrapped startup companies, and entrepreneurs globally where it is conditioned with the legal governance, risk management and compliances ensuring to create the most secure environment for our customers to provide 200% confidentiality.</p>
        '/>
      <EngagementModel 
        EngagementClass="engagementmodel-row custom-margin engagement-pink-titlebg"
        EngagementModelImage="/images/nda.png"     
        EngagementModelImageWidth="750"
        EngagementModelImageHeight="338"  
        EngagementMainTitle="Non-Disclosure Agreement"    
        EngagementModelIcon="/images/nda-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName=""
        EngagementContent='         
          <ul>
            <li>As a part of the Webenix recruitment and hiring process, our employees signs in the legal non-disclosure agreement about not disclosing any proprietary information outside the premises.</li>
            <li>Any information that will be delivered to employees while working directly with clients is strictly prohibited to disclose or use somewhere else.</li>
            <li>For safeguarding in the most secure ways we sign the NDA for employees as well as for our customers.</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagementmodel-alt engagement-green-titlebg custom-margin"
        EngagementModelImage="/images/technology-security.png"     
        EngagementModelImageWidth="403"
        EngagementModelImageHeight="380"  
        EngagementMainTitle="Technical Security"    
        EngagementModelIcon="/images/technical-security-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName=""
        EngagementContent='
          <ul>
            <li>CISCO Firewalls and switches</li>
            <li>PCI Data Security Standards</li>
            <li>Latest AntiVirus in all Workstations</li>
            <li>Licensed Antivirus, Anti malware, Anti ransomware softwares</li>
            <li>Regular Monitoring and logging</li>
            <li>Software and Security audits</li>
            <li>Authorized IP access in network</li>
            <li>Encrypted Data transfer</li>
            <li>RAID (Redundant Backup of Information Disks)</li>
          </ul>
      '/>

      <EngagementModel 
        EngagementClass="engagementmodel-row engagement-orange-titlebg custom-margin"
        EngagementModelImage="/images/infrastructure-security.png"     
        EngagementModelImageWidth="450"
        EngagementModelImageHeight="453"  
        EngagementMainTitle="Infrastructure physical security"
        EngagementModelIcon="/images/infrastructure-physical-security-icon.svg"
        EngagementModelIconWidth="100"
        EngagementModelIconHeight="100"
        EngagementModelName=""
        EngagementContent='
          <ul>
            <li>24 x 7 CCTV for safety and security</li>
            <li>Punch in and out a biometric system for authorized entries only</li>
            <li>Fire alarm</li>
            <li>Backup Generator and UPS</li>
          </ul>
      '/>
    </>
  )
}

export default Confidentiality