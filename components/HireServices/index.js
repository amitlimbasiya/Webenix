import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/hireServices.style";
import fullStackDevIcon from '../../public/images/full-stack-icon.svg';
import flutterIcon from '../../public/images/flutter-icon.svg';
import angularIcon from '../../public/images/angular-icon.svg';
import laravelIcon from '../../public/images/laravel-icon.svg';
import wordpressDevIcon from '../../public/images/wordpress-icon.svg';

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
                        <Link href='#'>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon hawkesBlueBg'>
                                    <Image src={fullStackDevIcon} alt="Fullstack Developers" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Fullstack <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href='#'>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon azaleaBg'>
                                    <Image src={angularIcon} alt="Angular Developers" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Angular <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href='#'>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon frenchLilacBg'>
                                    <Image src={wordpressDevIcon} alt="Wordpress Developers" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Wordpress <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href='#'>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon cosmosBg'>
                                    <Image src={laravelIcon} alt="Laravel Developers" layout="raw" />
                                </s.iconBox>
                                <s.serviceName>Laravel <br />Developers</s.serviceName>
                            </a>
                        </Link>
                    </s.hireServicesItem>
                    <s.hireServicesItem className='hireServicesItem'>
                        <Link href='#'>
                            <a className='iconBoxLink'>
                                <s.iconBox className='icon frozenPeriwinkleBg'>
                                    <Image src={flutterIcon} alt="Flutter Developers" layout="raw" />
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