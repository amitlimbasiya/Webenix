import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/SectionIntro';
import HireServies from '../components/HireServices';
import Blog from '../components/Blog';
import SteptoEngage from '../components/SteptoEngage';
import TechnologyStack from '../components/TechnologyStack';

const PGI = () => {
  return (
    <>
    <PageBanner 
        PageBannerClass="pagebanner-section pagebanner-shape bgMistyRose pagebanner-align-center noiseBg"
        PageBannerImgClass="pagebannerimg-col" 
        PageBannerTitle="Payment Gateway Integration"
        PageBannerContent="One clicks and guess what you have transferred your amount securely. The easiest way of transacting money is what we urge to have today digitally. Payment gateways make the quickest and easiest transaction of money yet with the best security. Webenix has hands-on including the leading and most used payment APIs integrated with the enterprise websites and mobile applications globally. " 
        PageBannerBtnText="Know More"
        PageBannerBtnLink="#"
        PageBannerImageWidth="280px"
        PageBannerImageHeight="250px"
        PageBannerImage="/images/payment-gatway-integration-icon.svg"
      />
    <SectionIntro 
      SectionIntroclassName="introuction-section noiseBg"
      IntroSubTitle="Our Integration Expertise"
      IntroMainTitle="Grow your business with the highest flexibility and yet most securely."
      IntroContent='
      <p>The payment hustle becomes easier when payment gateways are integrated into websites and mobile applications. To carry out online transactions, it is important to integrate the right payment gateways. Along with optimum security and transactions, it helps in decreasing the risk of transactions around the globe.</p>
      <p>With Webenix, payment API integration makes the enterprise business easier that is dedicated to easy payment solutions, whether receiving or transferring the money. From our end, we consider taking care of the payment API integrations in the best ways possible.</p>
      <h3>Avoid the payment complexities, and avail the best payment integration!</h3>
      <p>We provide the payment gateway API integration to all level websites and mobile applications. Our payment API integration services will help with complex banking solutions by securing digital payment gateways. </p>
      <p>Are you looking to integrate multiple payment gateways in your business? Well, you are at the right place to have the most secure ways of payment integrations. Do not bother about the maintenance that comes along, we have got your back because we believe in inserting the industry-centric payment norms.</p>
    '/>    
    <HireServies/>
    <TechnologyStack/>
    <SteptoEngage/>
    <Blog/>
    </>
  )
}

export default PGI