import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/MobileAppDevelopmentPage/SectionServicesBoxes.style";
import shapeGreenIcon from '../../../public/images/mobileAppDevelopment/shapeGreen.svg';
import shapeYellowIcon from '../../../public/images/mobileAppDevelopment/shapeYellow.svg';
import crossPlatformIcon from '../../../public/images/mobileAppDevelopment/crossPlatform.svg';
import nativeAppIcon from '../../../public/images/mobileAppDevelopment/nativeApp.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Mobiel App Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Native App Development</s.boxHeading>
                    <s.textPart>We bring down the Native experience of the iOs and Android mobile applications altogether.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                <Image src={nativeAppIcon} alt="Native App Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Cross-platform development </s.boxHeading>
                    <s.textPart>Carry your digital presence over multiple platforms through trendy cross-platforms.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={crossPlatformIcon} alt="Cross-platform development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
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
