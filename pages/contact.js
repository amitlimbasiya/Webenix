import React from 'react';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import ContactForm from '../components/ContactForm';
import Head from 'next/head';
import { data } from "../data/Seo";
const Contact = () => {
  return (
    <>  
      <Head>
        <title>{data.contact.title}</title>
        <meta name="description" content={data.contact.description}/>
        <meta name="keywords" content={data.contact.keyword} />
        <script defer="" src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>   
      <PageBanner 
            PageBannerBigTitle="CONTACT"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle="LET’S"
            PageBannerGreenUnderlineText="CONNECT"
        /> 
        <SectionIntro 
        IntroSubTitle="Contact Us"
        IntroMainTitle="Let's Talk Business!"
        IntroContent='
            <p>Have questions about your idea? Drop in your details to discuss with our solution consultants. We look forward to hear from you.</p>
            <p>You can directly email our directors info@webenix.net or fillup below given form</p>         
      '/>
      <ContactForm/>
    </>
  )
}
export default Contact;