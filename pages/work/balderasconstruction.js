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
import PortfolioBannerImg from '../../public/images/portfolio-balderasconstruction.png';
import Head from 'next/head';
import { data } from "../../data/Seo";


const BalderasConstruction = () => {
  return (
    <>
        <Head>
            <title>{data.balderasconstruction.title}</title>
            <meta name="description" content={data.balderasconstruction.description}/>
            <meta name="keywords" content={data.balderasconstruction.keyword} />
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
                    <p>Balderas Construction is a full-service, family-run construction company based in Houston, TX. With over 20 years in the industry, we&#39;re the recognized leaders in Texas construction. Our reputation precedes us and speaks for itself. Whether your project is big or small, residential or commercial, we treat each and every client as if they are our only client. We handle almost any kind of construction project imaginable: renovation, design-builds, remediation, carpentry, build-outs, remodeling, and more.</p>
                    <p>Building is not just what we do. It&#39;s who we are.</p>
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
                                <h4>Construction</h4>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                        <s.PortfolioTechBox>
                            <s.PortfolioTechIcon className='yellow-bg'>
                                <Image src={WebIcon} alt="Technologies" layout='raw' />
                            </s.PortfolioTechIcon>
                            <s.PortfolioTechContent>
                                <p>URL</p>
                                <Link href="https://balderasconstruction.com/"><a target="_blank">Website</a></Link>
                            </s.PortfolioTechContent>
                        </s.PortfolioTechBox>
                    </s.PortfolioTechRow>
                </s.PortfolioDescription>

                <s.PortfolioBannerImg>
                    <Image src={PortfolioBannerImg} alt="Balderas Construction" placeholder="blur" layout='raw' />
                </s.PortfolioBannerImg>
            </Container>
        </s.SinglePortfolioWrapper>
       <Blog/>
    </>
  )
}

export default BalderasConstruction;