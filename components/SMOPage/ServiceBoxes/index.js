import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/SEOPage/SectionServicesBoxes.style";
import shapePinkIcon from '../../../public/images/seo/shapePink.svg';
import shapeYellowIcon from '../../../public/images/seo/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/seo/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/seo/shapeBlue.svg';
import technicalSEOAuditIcon from '../../../public/images/seo/technicalSEOAuditIcon.svg';
import aboutIcon from '../../../public/images/f-about-icon.svg';
import smoIcon from '../../../public/images/f-SMO.svg';
import paymentGatwayIntegrationIcon from '../../../public/images/f-payment-gateway-integration-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>SMO Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Social Media Setup</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={smoIcon} alt="Social Media Setup Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                  <s.boxHeading>Social Media Strategy</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={aboutIcon} alt="Social Media Strategy Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                  <s.boxHeading>Content Creation</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={smoIcon} alt="Content Creation Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                  <s.boxHeading>Paid Promotion</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={paymentGatwayIntegrationIcon} alt="Paid Promotion Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
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
