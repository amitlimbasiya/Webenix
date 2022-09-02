import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/hireServices.style";
import flutterIcon from '../../public/images/f-Flutter-Icon.svg';
import webDesignIcon from '../../public/images/f-Web-Design.svg';
import wordpressDevIcon from '../../public/images/f-wordpress-icon.svg';
import reactJsIcon from '../../public/images/f-Reactjs-Icon.svg';
import nodeJsIcon from '../../public/images/f-NodeJS-Icon.svg';
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
                    <s.heading>Hire Dedicated Resources</s.heading>
                    <s.subHeading>From Webenix</s.subHeading>
                </s.topContent>
                <s.hireServicesList className='hireServicesList'>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.WEBDESIGN}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon jordyBlueBg'>
                                    <Image src={webDesignIcon} alt="Web Design Icon" layout='raw'/>
                                </s.iconBox>
                                <s.serviceName>Web<br />Designer</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.WORDPRESSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon desertSandBg'>
                                    <Image src={wordpressDevIcon} alt="Wordpress Deveopment Icon" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Wordpress<br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.REACTJSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon seashellBg'>
                                    <Image src={reactJsIcon} alt="React JS Development" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>ReactJs <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.NODEJSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon carouselPinkBG'>
                                    <Image src={nodeJsIcon} alt="Node JS development" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>NodeJs <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href={router.FLUTTERAPPSDEVELOPMENT}>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon pinkPearleBg'>
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