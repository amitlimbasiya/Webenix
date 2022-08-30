import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import PageBanner from '../../components/PageBanner3';
import Blog from '../../components/Blog';
import Link from "next/link";
import * as s from "../../styles/components/SinglePortfolio.style";
import TechnologiesIcon from '../../public/images/portfolio-tech-icon.svg';
import BuiltIcon from '../../public/images/portfolio-built-icon.svg';
import IndustryIcon from '../../public/images/portfolio-industry-icon.svg';
import WebIcon from '../../public/images/portfolio-website-icon.svg';
import PortfolioBannerImg from '../../public/images/portfolio-usa-pipelining.png';
import Head from 'next/head';
import { data } from "../../data/Seo";

var settings = {
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true
};
const USAPipeline = () => {
  return (
    <>
        <Head>
            <title>{data.usapipelining.title}</title>
            <meta name="description" content={data.usapipelining.description}/>
            <meta name="keywords" content={data.usapipelining.keyword} />
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
                    <p>We are a South Florida based plumbing company specializing in pipelining, a method of restoring existing pipe systems in residential and commercial buildings without the hassle, time, and staggering expense required by inferior, conventional solutions. Our unique robotic pipelining process records the current state of pipe systems, cleans out rust and deposits, and then coats the metal interior with safe, impermeable epoxy resin, permanently sealing leaks and improving water flow.</p>
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
                                <h4>Industry</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://usa-pipelining.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <Slider className='slickSlider' {...settings}>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg} alt="USA Pipeline" layout='raw' />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg} alt="USA Pipeline" layout='raw' />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg} alt="USA Pipeline" layout='raw' />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                </Slider>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default USAPipeline;