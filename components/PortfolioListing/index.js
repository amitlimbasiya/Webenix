import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from "next/link";
import Image from "next/image";
import router from '../../utils/router';
import * as s from "../../styles/components/PortfolioListing/PortfolioListing.style";
import usaPipeline from '../../public/images/portfolio-usa-pipelining.png';
import theblossomacademy from '../../public/images/portfolio-theblossomacademy.png';
import southerntradelines from '../../public/images/portfolio-southerntradelines.png';
import lifecoachakhan from '../../public/images/portfolio-lifecoachakhan.png';
import ellemar from '../../public/images/portfolio-ellemar.png';
import balderasconstruction from '../../public/images/portfolio-balderasconstruction.png';
import diningedge from '../../public/images/portfolio-diningedge.png';
import superstars from '../../public/images/portfolio-superstars-camp.png';


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
                                        <s.portfolioThumbImg><Image src={usaPipeline} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>USA PIPELINING</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Industry</p>
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
                                        <s.portfolioThumbImg><Image src={theblossomacademy} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>THE BLOSSOM ACADEMY</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Education</p>
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
                                        <s.portfolioThumbImg><Image src={southerntradelines} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>SOUTHERN TRADELINES</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>business</p>
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
                                        <s.portfolioThumbImg><Image src={lifecoachakhan} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>LIFE COACHA KHAN</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>education</p>
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
                                        <s.portfolioThumbImg><Image src={ellemar} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>ELLEMAR</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Realestate</p>
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
                                        <s.portfolioThumbImg><Image src={diningedge} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>DINING EDGE</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>restaurants</p>
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
                                        <s.portfolioThumbImg><Image src={balderasconstruction} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>BALDERAS CONSTRUCTION</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Construction</p>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>    
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href={router.SUPERSTARSCAMP}>
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={superstars} alt="Superstars Camp<" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>Superstars Camp</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Education</p>
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