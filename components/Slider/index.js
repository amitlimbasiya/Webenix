import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as s from "../../styles/components/slider.style";
import costIcon from '../../public/images/cost-icon.svg';
import websiteDevelopmentIcon from '../../public/images/website-development-icon.svg';
import onTimeIcon from '../../public/images/on-time-icon.svg';
import heroImg1 from '../../public/images/home-banner-1.png';
import heroImg2 from '../../public/images/home-banner-2.png';
import heroImg3 from '../../public/images/home-banner-3.png';
import emailIcon from '../../public/images/email-icon.svg';
import skypeIcon from '../../public/images/skype-icon.svg';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  fade: true,
  autoplaySpeed:3000,
  cssEase: "linear",
//   beforeChange: (current, next) =>
//         this.setState({ oldSlide: current, activeSlide: next }),
};

const Hero = () => {
    return (
    <>
    <s.SliderCompany className='homeSlider'>
        <Container>
            <Row className='align-items-center sliderBanner'>
                <Col md={12} lg={6}> 
                    <s.bannerLeft className='bannerLeft'>
                        <s.bannerHeading><strong className="highlightText">Empower</strong> your 
                        <strong className="highlightText">business</strong> with<br />
                        <strong className="highlightText"> skilful team</strong> and <strong className="highlightText">top notch </strong><br />
                        <span className="textGreen"> experience.</span></s.bannerHeading>
                        <s.bannerIcons className='bannerIcons'>
                            <s.iconBox className='bannerIcon'>
                                <Image src={onTimeIcon} alt="On Time Icon" layout="raw"/>
                                <s.iconHeading>
                                On Time
                                </s.iconHeading>
                            </s.iconBox>
                            <s.iconBox className='bannerIcon'>
                                <Image src={websiteDevelopmentIcon} alt="Quality Service Icon" layout="raw"/>
                                <s.iconHeading>
                                Quality Service
                                </s.iconHeading>
                            </s.iconBox>
                            <s.iconBox className='bannerIcon'>
                                <Image src={costIcon} alt="Cost Effective Icon" layout="raw"/>
                                <s.iconHeading>
                                Cost Effective
                                </s.iconHeading>
                            </s.iconBox>
                        </s.bannerIcons>
                    </s.bannerLeft>
                </Col>
                <Col md={12} lg={6} className="d-none d-lg-block">
                  <Slider className='slickSlider' {...settings}>
                    <div>
                    <Image src={heroImg1} alt="Hero Banner" className='img-fluid' layout="raw"/>
                    </div>
                    <div>
                    <Image src={heroImg2} alt="Hero Banner" className='img-fluid' layout="raw"/>
                    </div>
                    <div>
                    <Image src={heroImg3} alt="Hero Banner" className='img-fluid' layout="raw"/>
                    </div>
                  </Slider>
                </Col>
            </Row>
        </Container>
        <s.screenBottomBar className='btmBar'>
            <s.leftPart className="leftPart">
                <Link href='mailto:info@webenix.net'>
                    <a>
                        <Image src={emailIcon} alt="Email Icon"  layout="raw"/>
                        info@webenix.net
                    </a>
                </Link>
                <Link href='skype:anand.patadiya?chat'>
                    <a>
                        <Image src={skypeIcon} alt="Skype Icon"  layout="raw"/>
                        webenix
                    </a>
                </Link>
            </s.leftPart>
            <s.rightPart className="rightPart">
                <Link href='#'>
                    <a>
                        PARTNERSHIP
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        BLOG
                    </a>
                </Link>
                <Link href='#'>
                    <a>
                        GET IN TOUCH
                    </a>
                </Link>
            </s.rightPart>
        </s.screenBottomBar>
    </s.SliderCompany>
    </>
  );
};
export default Hero