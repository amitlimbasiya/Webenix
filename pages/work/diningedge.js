import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import PageBanner from '../../components/PageBanner3';
import Blog from '../../components/Blog';
import Link from "next/link";
import * as s from "../../styles/components/SinglePortfolio.style";
import TechnologiesIcon from '../../public/images/f-Technologies.svg';
import BuiltIcon from '../../public/images/f-Built-for.svg';
import IndustryIcon from '../../public/images/f-Industry.svg';
import WebIcon from '../../public/images/f-URL.svg';
import PortfolioBannerImg from '../../public/images/portfolio-diningedge.png';
import Head from 'next/head';
import { data } from "../../data/Seo";

const DiningEdge = () => {
  return (
    <>
        <Head>
            <title>{data.diningedge.title}</title>
            <meta name="description" content={data.diningedge.description}/>
            <meta name="keywords" content={data.diningedge.keyword} />
        </Head>
        <PageBanner 
            PageBannerBigTitle="PROJECT"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg smallPart"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle=""
            PageBannerGreenUnderlineText="Project"
        />
        <s.SinglePortfolioWrapper className='zigzag-border-pattern'>
            <Container>
                <s.PortfolioDescription>
                    <h3>Introduction</h3>
                    <p>DiningEdge Technology (DET) is a user friendly, Internet-based restaurant inventory software that has been developed for establishments specializing in providing food and beverage for their patrons. Built for restaurants, bars, country clubs, catering , schools, Casino&#39;s, Hotels and any other location where purchasing food is an operational task, from small to multi-unit chains. DET offers much more than a purchasing platform, we offer you a complete suite and opportunities for your business. DET can help you cut costs, control, streamline and organize your complete business, this we guarantee.</p>
                    <p>DET will help you place orders efficiently and electronically. No more phone calls, messages and disrupting the flow of business. We also help you to strengthen relationships with vendors by giving them an opportunity to provide pricing on all of your items and gain a larger share of your ordering.</p>
                    <s.PortfolioTechRow>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='pink-bg'>
                                <Image src={TechnologiesIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Technologies</p>
                                <h4>WordPress</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='purple-bg'>
                                <Image src={BuiltIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Built for</p>
                                <h4>Web</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='sky-bg'>
                                <Image src={IndustryIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Industry</p>
                                <h4>Restaurants</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://diningedge.net/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <s.PortfolioBannerImg>
                    <Image src={PortfolioBannerImg} alt="Dining Edge" layout='raw' placeholder="blur" />
                </s.PortfolioBannerImg>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default DiningEdge;