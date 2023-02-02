import React from "react";
import PageBanner from "../components/PageBanner4";
import Perks from "../components/MeetTtheTeam/Perks";
import Head from "next/head";
import { data } from "../data/Seo";

const MeetTheTeam = () => {
  return (
    <>
      <Head>
        <title>{data.meettheteam.title}</title>
        <meta name="description" content={data.meettheteam.description} />
        <meta name="keywords" content={data.meettheteam.keyword} />
        <script defer="" src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <PageBanner
        PageBannerClass="pagebanner-section aboutBg top-right"
        PageBannerTitle="Meet"
        PageBannerGreenUnderlineText="The Team"
      />
      <Perks />
    </>
  );
};

export default MeetTheTeam;
