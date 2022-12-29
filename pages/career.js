import React from 'react'
import PageBanner from '../components/PageBanner';
import SectionIntro from '../components/CareerPage/SectionIntro';
import Perks from '../components/CareerPage/Perks';
import Head from 'next/head';
import { data } from "../data/Seo";

const CAREER = () => {
  return (
    <>
      <Head>
        <title>{data.career.title}</title>
        <meta name="description" content={data.career.description}/>
        <meta name="keywords" content={data.career.keyword} />
        <script defer="" src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <PageBanner 
        PageBannerClass="pagebanner-section top-right darkGreenNoice"
        PageBannerImgClass="pagebannerimg-col at-right-bottom" 
        PageBannerTitle="Establishing the organization with the skilful and a real team player"
        PageBannerContent=""
        PageBannerBtnText="VIEW OPENINGS"
        PageBannerBtnLink=""
        PageBannerImageWidth="557px"
        PageBannerImageHeight="298px"
        PageBannerImage="/images/career/career-banner-icon.svg"/>
      <SectionIntro/>
      <Perks/>  
      </>
  )
}

export default CAREER