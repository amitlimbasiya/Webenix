import React from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import PageBanner from '../../components/PageBanner3';
import Blog from '../../components/Blog';
import Link from "next/link";
import * as s from "../../styles/components/SinglePortfolio.style";
import TechnologiesIcon from '../../public/images/portfolio-tech-icon.svg';
import BuiltIcon from '../../public/images/portfolio-built-icon.svg';
import IndustryIcon from '../../public/images/portfolio-industry-icon.svg';
import WebIcon from '../../public/images/portfolio-website-icon.svg';
import PortfolioBannerImg from '../../public/images/portfolio-lifecoachakhan.png';


const USAPipelining = () => {
  return (
    <>
        <PageBanner 
            PageBannerBigTitle="PROJECT"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle=""
            PageBannerGreenUnderlineText="Project"
        />
        <s.SinglePortfolioWrapper className='zigzag-border-pattern'>
            <Container>
                <s.PortfolioDescription>
                    <h3>Introduction</h3>
                    <p>Hello My name is Ashton Khan from Toronto, Canada.</p>
                    <p>I am a <strong>Certified Life Coach and Professional Basketball Athlete</strong> that has played in various countries such as France, Portugal, England, Canada, and China. I&#39;m a former NCAA Division 1 Basketball Scholarship Athlete and in 2019 I was inducted into the Hall of Fame of my Highschool, Brewster Academy (NH, US).</p>
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
                                <h4>Education</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://lifecoachakhan.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <s.PortfolioBannerImg>
                    <Image src={PortfolioBannerImg} alt="Life Coacha Khan" layout='raw' />
                </s.PortfolioBannerImg>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default USAPipelining;