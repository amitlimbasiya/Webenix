import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/BackendDevelopmentPage/SectionServicesBoxes.style";
import shapePurpleIcon from '../../../public/images/backendDevelopment/shapePurple.svg';
import shapeGreenIcon from '../../../public/images/backendDevelopment/shapeGreen.svg';
import shapePastelPink from '../../../public/images/backendDevelopment/shapePastelPink.svg';
import shapeMorningGloryIcon from '../../../public/images/backendDevelopment/shapeMorningGlory.svg';
import mobileAppDesignIcon from '../../../public/images/mobile-app-design-icon.svg';
import backendDevelopmentIcon from '../../../public/images/backend-development-icon.svg';
import fullStackIcon from '../../../public/images/full-stack-icon.svg';
import thirdPartyAPIntegrationIcon from '../../../public/images/f-Third-Party-Integration-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Backend expertise</span>
            <h2>Backend Development Services</h2>
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
                    <s.boxHeading>Mobile API Development</s.boxHeading>
                    <s.textPart>Showcase your brand by developing a strong mobile app development that brings down the better representation of the company.</s.textPart>
                    
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
                    <s.boxHeading>Third Party API Integration</s.boxHeading>
                    <s.textPart>With proficiency in the knowledge of a strong background in Node JS Development services, we provide the adroit resources that are made right for your business.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={thirdPartyAPIntegrationIcon} alt="Third Party API Integration Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeMorningGloryIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="PastelPinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Datebase Management</s.boxHeading>
                    <s.textPart>If you are looking for the best PHP-centric software, Laravel is considered to be the first choice in the PHP framework. For businesses who are looking for a performance-centric platform, PHP Laravel is considered to be the best one. We at Webenix have the best hands-on building industry-specific using Laravel frameworks.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={fullStackIcon} alt="laravel Icon" layout="raw" />
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
