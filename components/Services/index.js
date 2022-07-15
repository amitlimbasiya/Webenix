import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/services.style";
import mobileAppDevelopment from '../../public/images/mobile-app-development.png';
import iphoneIcon from '../../public/images/iphone-icon.svg';
import flutterIcon from '../../public/images/flutter-icon.svg';
import uiUxIcon from '../../public/images/ui-ux-icon.svg';
import mobileAppDesignIcon from '../../public/images/mobile-app-design-icon.svg';
import esd from '../../public/images/enterprise-software-development.png';
import codeIcon from '../../public/images/codeIcon.svg';
import eCommerceIcon from '../../public/images/eCommerce-icon.svg';
import aspNetDevelopmentIcon from '../../public/images/asp-net-development-icon.svg';
import hireDedicatedDevelopersIcon from '../../public/images/hire-dedicated-developers-icon.svg';
import androidAppIcon from '../../public/images/android-app-icon.svg';
import iosDevIcon from '../../public/images/apple-ios.svg';
import wordpressDevIcon from '../../public/images/wordpress-icon.svg';
import smoIcon from '../../public/images/smo-icon.svg';
import websiteDesignIcon from '../../public/images/website-design-icon.svg';
import seoIcon from '../../public/images/seo-icon.svg';
import ppcIcon from '../../public/images/ppc-icon.svg';
import CMSDevIcon from '../../public/images/cms-icon.svg';

const Services = () => {
    return (
    <>
        <s.service className="servicesSection">
            <s.bigText className='bigText'>Services</s.bigText>
            <s.topPart className="topPart">
                <Container>
                    <s.topTitle>
                        See What We <br />Can Do For You
                    </s.topTitle>
                </Container>
            </s.topPart>
            <s.serviceListing className="servicesListing">
            <s.serviceItem className="serviceItem bottom right">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='leftPart'>
                            <s.titlePart>Design</s.titlePart>
                            <s.desc>With the team of creative heads, we make sure of assembling the clean and sleek designs that will help in transforming the visuals and the presentation of your brand. Showcasing your brand in the best ways and bringing your vision into reality is what we stand here by representing the different sectors of designing and branding on board.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={iphoneIcon} alt="Graphics Design Icon" className='img-fluid' layout='raw'/> Graphics Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={websiteDesignIcon} alt="Web Design Icon" className='img-fluid' layout='raw'/> Web Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={uiUxIcon} alt="UI/UX Design Icon" className='img-fluid' layout='raw'/>  UI/UX Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={mobileAppDesignIcon} alt="Mobile App Design Icon" className='img-fluid' layout='raw'/>  Mobile App Design</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>
                            <s.ctaPart>
                                <Link href="#">
                                    <a className="btn-default btn-arrow">KNOW MORE</a>
                                </Link>
                            </s.ctaPart>
                        </Col>
                        <Col className='rightPart'>
                            <Image src={mobileAppDevelopment} alt="Mobile Application Development" className='img-fluid' layout="raw" />
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='rightPart order-last order-md-first'>
                            <Image src={esd} alt="Enterprise Software Development" className='img-fluid' layout="raw" />
                        </Col>
                        <Col className='leftPart order-first order-md-last'>
                            <s.titlePart>Web <br/>Development</s.titlePart>
                            <s.desc>Webenix provides the best web development services considering serving in the different sectors with the help of a professional team who is profound in different programming languages. Bringing transparency in the web content to synchronising the development aspect, we serve the best for your business.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={codeIcon} alt="Web Development Icon" className='img-fluid' layout='raw'/> Web Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={eCommerceIcon} alt="eCommerce Development Icon" className='img-fluid' layout='raw'/> eCommerce Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={CMSDevIcon} alt="CMS development Icon" className='img-fluid' layout='raw'/> CMS development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={hireDedicatedDevelopersIcon} alt="API Development Icon" className='img-fluid' layout='raw'/> API Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>
                            <s.ctaPart>
                                <Link href="#">
                                    <a className="btn-default btn-arrow">KNOW MORE</a>
                                </Link>
                            </s.ctaPart>
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom right">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='leftPart'>
                            <s.titlePart>Mobile App <br/>development</s.titlePart>
                            <s.desc>Webenix mobile app development has hands-on work with multiple technologies, with a team of top-notch developers working with various technologies. We have met the expectation of delivering the mobile apps on the major two platforms-Android and iOs. Focusing on the end-to-end development with the scalable app development process. </s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={androidAppIcon} alt="Android App Development Icon" className='img-fluid' layout='raw'/> Android App Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={iosDevIcon} alt="iOS app development Icon" className='img-fluid' layout='raw'/> iOS App Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={wordpressDevIcon} alt="Cross-Platform Development Icon" className='img-fluid' layout='raw'/>  Cross-Platform Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={flutterIcon} alt="Flutter App Development Icon" className='img-fluid' layout='raw'/>  Flutter App Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>
                            <s.ctaPart>
                                <Link href="#">
                                    <a className="btn-default btn-arrow">KNOW MORE</a>
                                </Link>
                            </s.ctaPart>
                        </Col>
                        <Col className='rightPart'>
                            <Image src={mobileAppDevelopment} alt="Mobile Application Development" className='img-fluid' layout="raw" />
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='rightPart order-last order-md-first'>
                            <Image src={esd} alt="Enterprise Software Development" className='img-fluid' layout="raw" />
                        </Col>
                        <Col className='leftPart order-first order-md-last'>
                            <s.titlePart>Digital <br/>Marketing</s.titlePart>
                            <s.desc>In the world of digitalisation, it is important for businesses to stay connected through the internet medium. It brings huge benefits to the business like finding the potential clients, strong engagement with the customers receiving a positive impact on the business is what will be expected from our team.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={seoIcon} alt="SEO Icon" className='img-fluid' layout='raw'/> SEO</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={ppcIcon} alt="PPC Icon" className='img-fluid' layout='raw'/> PPC</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={smoIcon} alt="SMO Icon" className='img-fluid' layout='raw'/> SMO</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>
                            <s.ctaPart>
                                <Link href="#">
                                    <a className="btn-default btn-arrow">KNOW MORE</a>
                                </Link>
                            </s.ctaPart>
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
        </s.serviceListing>
        </s.service>
        
    </>
  );
};

export default Services