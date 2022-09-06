import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/services.style";
import DesignImg from '../../public/images/01-Design.svg';
import WebDevelopmentImg from '../../public/images/02-Web-Development.svg';
import MobileAppDevelopmentImg from '../../public/images/03-Mobile-App-development.svg';
import DigitalMarketingImg from '../../public/images/04-Digital-Marketing.svg';
import graphicsDesignIcon from '../../public/images/f-Graphics-Design.svg';
import webDesignIcon from '../../public/images/f-Web-Design.svg';
import flutterIcon from '../../public/images/f-Flutter-Icon.svg';
import uiUxIcon from '../../public/images/f-UIUX-Design.svg';
import mobileAppDesignIcon from '../../public/images/f-Mobile-App-Design.svg';
import codeIcon from '../../public/images/f-Web-Development.svg';
import eCommerceIcon from '../../public/images/f-eCommerce-Development.svg';
import MVPDevIcon from '../../public/images/f-MVP-Development.svg';
import androidAppIcon from '../../public/images/f-Android-App-Icon.svg';
import iosDevIcon from '../../public/images/f-Apple-ios.svg';
import reactJsIcon from '../../public/images/f-Reactjs-Icon.svg';
import contentIcon from '../../public/images/f-content-writing.svg';
import smoIcon from '../../public/images/f-SMO.svg';
import seoIcon from '../../public/images/f-SEO.svg';
import ppcIcon from '../../public/images/f-PPC.svg';
import CMSDevIcon from '../../public/images/f-CMS-Development.svg';
import router from "../../utils/router";

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
            <s.serviceItem className="serviceItem bottom right designServices">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='leftPart'>
                            <s.titlePart>Design</s.titlePart>
                            <s.desc>With the team of creative heads, we make sure of assembling the clean and sleek designs that will help in transforming the visuals and the presentation of your brand. Showcasing your brand in the best ways and bringing your vision into reality is what we stand here by representing the different sectors of designing and branding on board.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href={router.GRAPHICSDESIGN}>
                                            <a><Image src={graphicsDesignIcon} alt="Graphics Design Icon" className='img-fluid' layout='raw'/> Graphics Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.WEBDESIGN}>
                                            <a><Image src={webDesignIcon} alt="Web Design Icon" className='img-fluid' layout='raw'/> Web Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.UIUX}>
                                            <a><Image src={uiUxIcon} alt="UI/UX Design Icon" className='img-fluid' layout='raw'/>  UI/UX Design</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.MOBILEAPPDEVELOPMENT}>
                                            <a><Image src={mobileAppDesignIcon} alt="Mobile App Design Icon" className='img-fluid' layout='raw'/>  Mobile App Design</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>                           
                        </Col>
                        <Col className='rightPart pr'>
                            <Image src={DesignImg} alt="Mobile Application Development" className='img-fluid' layout="responsive" />
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom developmentServices">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='rightPart order-last order-md-first pr'>
                            <Image src={WebDevelopmentImg} alt="Enterprise Software Development" className='img-fluid' layout="responsive" />
                        </Col>
                        <Col className='leftPart order-first order-md-last'>
                            <s.titlePart>Web <br/>Development</s.titlePart>
                            <s.desc>Webenix provides the best web development services considering serving in the different sectors with the help of a professional team who is profound in different programming languages. Bringing transparency in the web content to synchronising the development aspect, we serve the best for your business.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href={router.WEBDEVELOPMENT}>
                                            <a><Image src={codeIcon} alt="Web Development Icon" className='img-fluid' layout='raw'/> Web Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.ECOMMERCEDEVELOPMENT}>
                                            <a><Image src={eCommerceIcon} alt="eCommerce Development Icon" className='img-fluid' layout='raw'/> eCommerce Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.CMSDEVELOPMENT}>
                                            <a><Image src={CMSDevIcon} alt="CMS development Icon" className='img-fluid' layout='raw'/> CMS Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.MVPDEVELOPMENT}>
                                            <a><Image src={MVPDevIcon} alt="API Development Icon" className='img-fluid' layout='raw'/> MVP Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>                            
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom right mobileAppServices">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='leftPart'>
                            <s.titlePart>Mobile App <br/>Development</s.titlePart>
                            <s.desc>Webenix mobile app development has hands-on work with multiple technologies, with a team of top-notch developers working with various technologies. We have met the expectation of delivering the mobile apps on the major two platforms-Android and iOs. Focusing on the end-to-end development with the scalable app development process. </s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href={router.ANDROIDAPPSDEVELOPMENT}>
                                            <a><Image src={androidAppIcon} alt="Android App Development Icon" className='img-fluid' layout='raw'/> Android App Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.IOSAPPSDEVELOPMENT}>
                                            <a><Image src={iosDevIcon} alt="iOS app development Icon" className='img-fluid' layout='raw'/> iOS App Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.REACTNATIVEDEVELOPMENT}>
                                            <a><Image src={reactJsIcon} alt="React Native Development Icon" className='img-fluid' layout='raw'/>  React Native Development</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.FLUTTERAPPSDEVELOPMENT}>
                                            <a><Image src={flutterIcon} alt="Flutter App Development Icon" className='img-fluid' layout='raw'/>  Flutter App Development</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>                            
                        </Col>
                        <Col className='rightPart pr'>
                            <Image src={MobileAppDevelopmentImg} alt="Mobile Application Development" className='img-fluid' layout="responsive" />
                        </Col>
                    </Row>
                </Container>
            </s.serviceItem>
            <s.serviceItem className="serviceItem bottom digitalMarketingServices">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6} sm={12} className='rightPart order-last order-md-first pr'>
                            <Image src={DigitalMarketingImg} alt="Enterprise Software Development" className='img-fluid' layout="responsive" />
                        </Col>
                        <Col className='leftPart order-first order-md-last'>
                            <s.titlePart>Digital <br/>Marketing</s.titlePart>
                            <s.desc>In the world of digitalisation, it is important for businesses to stay connected through the internet medium. It brings huge benefits to the business like finding the potential clients, strong engagement with the customers receiving a positive impact on the business is what will be expected from our team.</s.desc>
                            <s.serviceLinks className="serviceLinks">
                                <ul>
                                    <li>
                                        <Link href={router.SEO}>
                                            <a><Image src={seoIcon} alt="SEO Icon" className='img-fluid' layout='raw'/> SEO</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.PPC}>
                                            <a><Image src={ppcIcon} alt="PPC Icon" className='img-fluid' layout='raw'/> PPC</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={router.SMO}>
                                            <a><Image src={smoIcon} alt="SMO Icon" className='img-fluid' layout='raw'/> SMO</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a><Image src={contentIcon} alt="Content Writing Icon" className='img-fluid' layout='raw'/> Content Writing</a>
                                        </Link>
                                    </li>
                                </ul>
                            </s.serviceLinks>                           
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