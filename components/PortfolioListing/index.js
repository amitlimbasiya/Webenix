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
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Branding</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box mobile item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Mobile</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Branding</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box branding item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Branding</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box web item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>Web</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
                                    </s.portfolioBottomContent>
                                </a>
                            </Link>
                        </s.PortfolioBlock>
                    </Col>
                    <Col lg={4} md={6} className="portfolio-box uiux item">  
                        <s.PortfolioBlock>
                            <Link href="#">
                                <a>
                                    <s.portfolioImgWrapper>
                                        <s.portfolioThumbImg><Image src={portfoliothumb01} alt="Php Blog" layout='raw' /></s.portfolioThumbImg>
                                        <s.portfolioOverlayContent className='portfolio-overlay-content'>
                                            <h4>A Global clinical trial management platform to streamline the product trial processes.</h4>
                                            <s.portfolioTag>
                                                <span className='tag lightpink'>Web</span>
                                                <span className='tag lightgreen'>Mobile</span>
                                                <span className='tag lightorange'>UI/UX</span>
                                            </s.portfolioTag>
                                        </s.portfolioOverlayContent>
                                    </s.portfolioImgWrapper>
                                    <s.portfolioBottomContent>
                                        <p className='portfolio-industry'>UI/UX</p>
                                        <h5 className='portfolio-name'>Super Stars Camps</h5>
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