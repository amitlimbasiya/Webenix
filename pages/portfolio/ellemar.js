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
import PortfolioBannerImg from '../../public/images/portfolio-ellemar.png';


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
                    <p>As a premier South Florida Luxury Home Builder, Ellemar Enterprises has been building and remodeling luxury homes from Ft. Lauderdale to Palm Beach for more than 25 years. The extraordinary expertise that creates the desired effect each time results from the established cooperation of exceptionally skilled professionals providing their specialized talents. The elegant magnificence of unsurpassed luxury can be yours.</p>
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
                                <h4>Realestate</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://ellemar.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <s.PortfolioBannerImg>
                    <Image src={PortfolioBannerImg} alt="Luxury Home Builder" layout='raw' />
                </s.PortfolioBannerImg>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default USAPipelining;