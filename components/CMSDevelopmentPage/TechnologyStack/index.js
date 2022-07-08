import React from 'react';
import { Col, Container, Tabs,Tab } from 'react-bootstrap';
import * as s from "../../../styles/components/CMSDevelopmentPage/TechnologyStack.style";
import Image from 'next/image';
import Link from "next/link";
import HTML5Icon from "../../../public/images/cmsDevelopment/HTML5-Icon.svg";
import CSS3Icon from "../../../public/images/cmsDevelopment/CSS3-Icon.svg";
import Bootstrap from "../../../public/images/cmsDevelopment/Bootstrap-Icon.svg";
import jQuery from "../../../public/images/cmsDevelopment/jQuery-Icon.svg";
import UIUX from "../../../public/images/cmsDevelopment/UIUX-Icon.svg";
import Responsive from "../../../public/images/cmsDevelopment/Responsive-Icon.svg";
import Photoshop from "../../../public/images/cmsDevelopment/Photoshop-Icon.svg";
import InDesign from "../../../public/images/cmsDevelopment/InDesign-Icon.svg";
import Figma from "../../../public/images/cmsDevelopment/Figma-Icon.svg";
import Sketch from "../../../public/images/cmsDevelopment/Sketch-Icon.svg";
import PhpMySQL from "../../../public/images/cmsDevelopment/PhpMySQL-Icon.svg";
import Wordpress from "../../../public/images/cmsDevelopment/wordpressIcon.svg";
import NodeJS from "../../../public/images/cmsDevelopment/NodeJS-Icon.svg";
import ReactJS from "../../../public/images/cmsDevelopment/ReactJS-Icon.svg";
import Hubspot from "../../../public/images/cmsDevelopment/hubspotIcon.svg";
import Shopify from "../../../public/images/cmsDevelopment/shopifyIcon.svg";
import Branding from "../../../public/images/cmsDevelopment/Branding-Icon.svg";
import SEO from "../../../public/images/cmsDevelopment/seo-icon.svg";
import SMM from "../../../public/images/cmsDevelopment/SMM-Icon.svg";
import PPC from "../../../public/images/cmsDevelopment/ppcIcon.svg";
import Android from "../../../public/images/cmsDevelopment/Android-Icon.svg";
import iOS from "../../../public/images/cmsDevelopment/AppleiOS-Icon.svg";
import Flutter from "../../../public/images/cmsDevelopment/flutterIcon.svg";


const TechnologyStack = () => {
  return (
    <s.TechnologyStackWrapper className='technologystack-section'>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>All about our</span>
              <h2>Technology Stack</h2>
            </s.SectionTagline>
            <s.TechnologyStackTab className='technologystack-tab'> 
                <Tabs defaultActiveKey="Frontend" id="technologystack" className="technologystack-list">
                    <Tab eventKey="Frontend" title="Frontend">
                        <s.TechnologyStackContent className='technologystack-content'>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={HTML5Icon} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>HTML 5</p>  
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={CSS3Icon} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>CSS 3</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Bootstrap} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Bootstrap</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={jQuery} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>jQuery</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={UIUX} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>UI/UX</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Responsive} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Responsive</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Photoshop} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Photoshop</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={InDesign} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>InDesign</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Figma} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Figma</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Sketch} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Sketch</p>
                                </a>
                            </Link>
                        </s.TechnologyStackContent>                    
                    </Tab>

                    <Tab eventKey="Backend" title="Backend">
                        <s.TechnologyStackContent className='technologystack-content'>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={PhpMySQL} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Php/MySQL</p>  
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Wordpress} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Wordpress</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={NodeJS} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Node JS</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={ReactJS} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>React JS</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Hubspot} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Hubspot</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Shopify} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Shopify</p>
                                </a>
                            </Link>
                        </s.TechnologyStackContent>     
                    </Tab>

                    <Tab eventKey="Digital" title="Digital">
                        <s.TechnologyStackContent className='technologystack-content'>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Branding} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Branding</p>  
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={SEO} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>SEO</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={SMM} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>SMM</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={PPC} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>PPC</p>
                                </a>
                            </Link>
                        </s.TechnologyStackContent>    
                    </Tab>

                    <Tab eventKey="Mobile" title="Mobile">
                        <s.TechnologyStackContent className='technologystack-content'>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Android} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Android</p>  
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={iOS} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>iOS</p>
                                </a>
                            </Link> 
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={Flutter} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>Flutter</p>
                                </a>
                            </Link>
                            <Link href="#">
                                <a><s.TechnologyStackLogo className="technologystack-icon"><Image src={ReactJS} className="img-fluid" alt="Logo" layout="raw"/></s.TechnologyStackLogo>
                                    <p>React Native</p>
                                </a>
                            </Link>
                        </s.TechnologyStackContent>   
                    </Tab>
                </Tabs>
            </s.TechnologyStackTab>
        </Container>
    </s.TechnologyStackWrapper>

  );
};

export default TechnologyStack