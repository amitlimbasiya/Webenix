import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/BackendDevelopmentPage/SectionServicesBoxes.style";
import NodeJSIcon from '../../../public/images/backendDevelopment/NodeJS-Icon.svg';
import shapePurpleIcon from '../../../public/images/backendDevelopment/shapePurple.svg';
import shapeOrangeIcon from '../../../public/images/backendDevelopment/shapeOrange.svg';
import shapeBlueIcon from '../../../public/images/backendDevelopment/shapeBlue.svg';
import shapeGreenIcon from '../../../public/images/backendDevelopment/shapeGreen.svg';
import shapePaleCeruleanIcon from '../../../public/images/backendDevelopment/shapePaleCerulean.svg';
import shapePastelPink from '../../../public/images/backendDevelopment/shapePastelPink.svg';
import shapeMorningGloryIcon from '../../../public/images/backendDevelopment/shapeMorningGlory.svg';
import mobileAppDesignIcon from '../../../public/images/mobile-app-design-icon.svg';
import backendDevelopmentIcon from '../../../public/images/backend-development-icon.svg';
import laravelIcon from '../../../public/images/laravel-icon.svg';
import aspNetIcon from '../../../public/images/asp-net-development-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Backend expertise</span>
            <h2>Our Backend Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web App Development</s.boxHeading>
                    <s.textPart>Give the extravagant push to your business by creating the best web app for your business ensuring the escalation in the growth. </s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                <Image src={backendDevelopmentIcon} alt="Backend Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile app development</s.boxHeading>
                    <s.textPart>Showcase your brand by developing a strong mobile app development that brings down the better representation of the company.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="Mobile App Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="MorningGloryPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Node JS development</s.boxHeading>
                    <s.textPart>With proficiency in the knowledge of a strong background in Node JS Development services, we provide the adroit resources that are made right for your business.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={NodeJSIcon} alt="NodeJS Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeMorningGloryIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="PaleCeruleanPart">
                <s.partItem className="textPart">
                    <s.boxHeading>ASP.NET development</s.boxHeading>
                    <s.textPart>Helps in managing the frictionless mobile and web apps, that provide frictionless services that are capable of holding up the strong backend services.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={aspNetIcon} alt="Asp Net Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePaleCeruleanIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="PastelPinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Laravel Development</s.boxHeading>
                    <s.textPart>If you are looking for the best PHP-centric software, Laravel is considered to be the first choice in the PHP framework. For businesses who are looking for a performance-centric platform, PHP Laravel is considered to be the best one. We at Webenix have the best hands-on building industry-specific using Laravel frameworks.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={laravelIcon} alt="laravel Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePastelPink} alt="Shape Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
          </Row>
        </Container>
      </s.ServiceBox>
    </>
  );
};

export default SectionServiceBoxes;
