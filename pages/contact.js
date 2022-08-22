import React from 'react';
import PageBanner from '../components/PageBanner3';
import SectionIntro from '../components/SectionIntro';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <>
     
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

export default Contact