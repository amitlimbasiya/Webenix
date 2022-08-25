import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/hireServices.style";
import flutterIcon from '../../public/images/flutter-icon.svg';
import websiteDesignIcon from '../../public/images/website-design-icon.svg';
import wordpressDevIcon from '../../public/images/wordpress-icon.svg';
import reactjsIcon from '../../public/images/reactjsBannerIcon.svg';
import nodeJsIcon from '../../public/images/NodeJS-Icon.svg';
import router from "../../utils/router";

const HireServices = () => {
    return (
    <>
        <s.hireSection className='hireSection'>
            <Container>
                <s.dotOverlay className='dotOverlay'>
                    <s.dot></s.dot>
                    <s.dot></s.dot>
                    <s.dot></s.dot>
                    <s.dot></s.dot>
                    <s.dot></s.dot>
                </s.dotOverlay>
                <s.topContent className='topContent'>
                    <s.heading>Leverage Our Hire Services</s.heading>
                    <s.subHeading>Looking for dedicated resources?</s.subHeading>
                </s.topContent>
                <s.hireServicesList className='hireServicesList'>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.WEBDESIGN}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon bgIceCold'>
                                    <Image src={websiteDesignIcon} alt="Web Design Icon" layout='raw'/>
                                </s.iconBox>
                                <s.serviceName>Web<br />Designer</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.WORDPRESSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon bgPlatinum'>
                                    <Image src={wordpressDevIcon} alt="Wordpress Deveopment Icon" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Wordpress<br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.REACTJSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon hawkesBlueBg'>
                                    <Image src={reactjsIcon} alt="React JS Development" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>ReactJs <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.NODEJSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon bgLightMintGreen'>
                                    <Image src={nodeJsIcon} alt="Node JS development" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>NodeJs <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.FLUTTERAPPSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon hawkesBlueBg'>
                                    <Image src={flutterIcon} alt="Flutter App Development" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Flutter <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                </s.hireServicesList>
            </Container>
        </s.hireSection>
    </>
    );
};

export default HireServices