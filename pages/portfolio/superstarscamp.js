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
import superstars from '../../public/images/portfolio-superstars-camp.png';


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
                    <p>Super Stars is a well-established camp that has been serving this community for the past sixteen years. Our Summer Camp is all about having fun through sports and fitness for children from Kindergarten through 8th grade!</p>
                    <p>Campers are divided into three different age groups throughout the day; Kindergarten and First graders, Second and Third graders, Fourth, Fifth and Sixth Graders. Activities include Swimming, Water Slides, Bounce Houses, Basketball, Soccer, Kickball, Flag Football, Color Wars, Camp Challenges, Pillow Polo, Roller Racers, Capture the flag, and more. Our objective is to get your kids moving, having fun and promoting a healthy lifestyle.</p>
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
                                <Link href="https://superstarscamp.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <s.PortfolioBannerImg>
                    <Image src={superstars} alt="Superstars Camp" layout='raw' />
                </s.PortfolioBannerImg>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default USAPipelining;