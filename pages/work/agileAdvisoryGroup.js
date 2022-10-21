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
import TechnologiesIcon from '../../public/images/f-Technologies.svg';
import BuiltIcon from '../../public/images/f-Built-for.svg';
import IndustryIcon from '../../public/images/f-Industry.svg';
import WebIcon from '../../public/images/f-URL.svg';
import PortfolioBannerImg1 from '../../public/images/agile-branding/01.jpg';
import PortfolioBannerImg2 from '../../public/images/agile-branding/02.jpg';
import PortfolioBannerImg3 from '../../public/images/agile-branding/03.jpg';
import PortfolioBannerImg4 from '../../public/images/agile-branding/04.jpg';
import PortfolioBannerImg5 from '../../public/images/agile-branding/05.jpg';
import Head from 'next/head';
import { data } from "../../data/Seo";

var settings = {
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: false
};
const AgileAdvisoryGroup = () => {
  return (
    <>
        <Head>
            <title>{data.agileAdvisoryGroup.title}</title>
            <meta name="description" content={data.agileAdvisoryGroup.description}/>
            <meta name="keywords" content={data.agileAdvisoryGroup.keyword} />
        </Head>
        <PageBanner 
        headingClass="greenBrd"
            PageBannerBigTitle="PROJECT"
            PageBannerClass="pagebanner-section lightPurplBg noiseBg smallPart"
            PageBannerImgClass="pagebannerimg-col at-right-bottom" 
            PageBannerTitle="Project"
            PageBannerGreenUnderlineText=""
        />
        <s.SinglePortfolioWrapper className='zigzag-border-pattern'>
            <Container>
                <s.PortfolioDescription>
                    <h3>Introduction</h3>
                    <p>We have been helping organizations of all sizes achieve agility and transform their operating models. We take the time to understand every organization&#8217;s current capability and help them align the delivery model to business goals and implement a transition strategy that is fit for purpose.</p>
                    <s.PortfolioTechRow>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='pink-bg'>
                                <Image src={TechnologiesIcon} alt="Technologies" />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Technologies</p>
                                <h4>WordPress</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='purple-bg'>
                                <Image src={BuiltIcon} alt="Technologies" />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Built for</p>
                                <h4>Web</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='sky-bg'>
                                <Image src={IndustryIcon} alt="Technologies" />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>Industry</p>
                                <h4>Industry</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://agileadvisorygroup.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <Slider className='slickSlider' {...settings}>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg1} placeholder="blur" alt="Agile Advisory Group" />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg2} placeholder="blur" alt="Agile Advisory Group" />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg3} placeholder="blur" alt="Agile Advisory Group" />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg4} placeholder="blur" alt="Agile Advisory Group" />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                    <s.itemSlider className='text-center'>
                        <s.PortfolioBannerImg>
                            <Image src={PortfolioBannerImg5} placeholder="blur" alt="Agile Advisory Group" />
                        </s.PortfolioBannerImg>
                    </s.itemSlider>
                </Slider>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default AgileAdvisoryGroup;