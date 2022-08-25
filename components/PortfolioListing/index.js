import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from "next/link";
import Image from "next/image";
import portfoliothumb01 from '../../public/images/singleblog-main-thumb.jpg';
import * as s from "../../styles/components/PortfolioListing/PortfolioListing.style";
import router from '../../utils/router';


const PortfolioListing = () => {
  return (
    <>
         <s.portolioSection>        
            <Container>
                <s.PortfolioFilterWrapper id="stuff-filters">        
                    <label className='portfolio-list-item active'><span className="filter-item" id="clear-filters">All</span></label>
                    <label className='portfolio-list-item'><input type="radio" name="cat" value="web" className="filter-item"/><span>Web</span></label>
                    <label className='portfolio-list-item'><input type="radio" name="cat" value="branding" className="filter-item"/><span>Branding</span></label>
                    <label className='portfolio-list-item'><input type="radio" name="cat" value="mobile" className="filter-item"/><span>Mobile</span></label>
                    <label className='portfolio-list-item'><input type="radio" name="cat" value="uiux" className="filter-item"/><span>UI/UX</span></label>
                </s.PortfolioFilterWrapper>
                <s.PortfolioWrapper id="portfoliowrapper" className='portfolio-list-row row'>
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href={router.USAPIPELINING}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>We are a South Florida based plumbing company specializing in pipelining, a method of restoring existing pipe systems in residential and commercial buildings without the hassle, time, and staggering expense required by inferior, conventional solutions.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>USA PIPELINING</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href={router.THEBLOSSOMACADEMY}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>Our powerful phonics &ndash; focused curriculum, memorable characters, catchy songs, meaningful storylines, and effective word work fosters happy and confident students who love to read.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>THE BLOSSOM ACADEMY</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box mobile item">  
                        <s.PortfolioBlock>
                            <Link href={router.SOUTHERNTRADELINES}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>Within a short time, you will be amazed by just how much your credit scores will have improved.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>SOUTHERN TRADELINES</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href={router.LIFECOACHAKHAN}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>I am a <strong>Certified Life Coach and Professional Basketball Athlete</strong> that has played in various countries such as France, Portugal, England, Canada, and China.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>LIFE COACHA KHAN</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href={router.ELLEMAR}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>As a premier South Florida Luxury Home Builder, Ellemar Enterprises has been building and remodeling luxury homes from Ft.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>ELLEMAR</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href={router.DININGEDGE}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>DiningEdge Technology (DET) is a user friendly, Internet-based restaurant inventory software that has been developed for establishments specializing in providing food and beverage for their patrons.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Branding</p>
                                        <h5 className='portfolio-name'>DINING EDGE</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href={router.BALDERASCONSTRUCTION}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>Balderas Construction is a full-service, family-run construction company based in Houston, TX. With over 20 years in the industry.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>BALDERAS CONSTRUCTION</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>     
                </s.PortfolioWrapper>
            </Container>
        </s.portolioSection> 
    </>
  )
}

export default PortfolioListing;