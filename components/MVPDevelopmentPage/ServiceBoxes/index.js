import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/MVPDevelopmentPage/SectionServicesBoxes.style";
import shapeGreenIcon from '../../../public/images/mvpDevelopment/shapeGreen.svg';
import backendDevelopmentIcon from '../../../public/images/backend-development-icon.svg';
import landingpageDesignSetup from '../../../public/images/f-landingpage-Design.svg';
import codeIcon from '../../../public/images/f-Web-Development.svg';
import shapePastelPinkIcon from '../../../public/images/mvpDevelopment/shapePastelPink.svg';
import shapePurpleIcon from '../../../public/images/mvpDevelopment/shapePurple.svg';
import mobileAppDesignIcon from '../../../public/images/f-Mobile-App-Design.svg';
import frontendIcon from '../../../public/images/front-end-development-icon.svg';
import BackEndDevelopmentIcon from '../../../public/images/f-Back-End-Developer.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>MVP Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile App Development</s.boxHeading>
                    <s.textPart>Our mobile app development helps in escalating the startup companies. Get in touch with us whether you are looking to build an app from the beginning or want to redesign it, we are here to give away the best solutions.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="Mobile App Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Purple Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web App Development</s.boxHeading>
                    <s.textPart>Website is an extension to your branding, marketing and business sales purposes. Build it right with our website development services.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={codeIcon} alt="Web App Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="PastelPinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Backend Development</s.boxHeading>
                    <s.textPart>With our integrated UI/UX principles we deliver you design that stays as a delight to users whether a website or app.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={BackEndDevelopmentIcon} alt="Backend Development Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePastelPinkIcon} alt="Shape Purple Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Wireframe Development</s.boxHeading>
                    <s.textPart>We provide Frontend development services that are strategic, guaranteed, and one-of-a-kind making competition trivial.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={landingpageDesignSetup} alt="Wireframe Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Purple Icon" layout="raw" />
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
