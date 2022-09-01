import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WebDevelopmentPage/SectionServicesBoxes.style";
import shapePinkIcon from '../../../public/images/webDevelopment/shapePink.svg';
import shapeYellowIcon from '../../../public/images/webDevelopment/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/webDevelopment/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/webDevelopment/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/webDevelopment/shapePurple.svg';
import mobileAppDesignIcon from '../../../public/images/mobile-app-design-icon.svg';
import CMSDevIcon from '../../../public/images/f-CMS-Development.svg';
import eCommerceIcon from '../../../public/images/f-eCommerce-Development.svg';
import codeIcon from '../../../public/images/codeIcon.svg';
import BackEndDevelopmentIcon from '../../../public/images/f-Back-End-Developer.svg';
import frontEndDevelopmentIcon from '../../../public/images/f-Front-End-Developer.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Web Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>CMS Development</s.boxHeading>
                    <s.textPart>We bring solutions by developing CMS for your business that helps facilitate, tailor, organize, modify, and plan the web content in the most accurate ways. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={CMSDevIcon} alt="CMS Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Ecommerce Development</s.boxHeading>
                    <s.textPart>Let us help in showcasing your business in the most organized ways for your customers that will align your brand voice by creating a perfect eCommerce element facilitating faster selling profit elements.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={eCommerceIcon} alt="eCmmerce Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web App Development</s.boxHeading>
                    <s.textPart>Give the extravagant push to your business by creating the best web app for your business ensuring the escalation in the growth.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={codeIcon} alt="Web App Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile API Development</s.boxHeading>
                    <s.textPart>Providing the leverage of connecting the mobile applications with the third party integration with Mobile API Development services by Webenix.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="Landing Page Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Backend Development</s.boxHeading>
                    <s.textPart>Offering backend development services for various web apps, cloud-based applications, and multiple domains which users will never see and yet making sure of performing the same as the back and front.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={BackEndDevelopmentIcon} alt="Backend Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Frontend Development</s.boxHeading>
                    <s.textPart>Taking care of the responsiveness on multiple screens, we maximize the user experience by developing attractive designs considering tiny details.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={frontEndDevelopmentIcon} alt="Frontend Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Purple Icon" layout="raw" />
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
