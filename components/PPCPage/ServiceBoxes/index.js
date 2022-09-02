import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/SEOPage/SectionServicesBoxes.style";
import shapePinkIcon from '../../../public/images/seo/shapePink.svg';
import shapeYellowIcon from '../../../public/images/seo/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/seo/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/seo/shapeBlue.svg';
import landingpageDesignSetup from '../../../public/images/f-landingpage-Design.svg';
import onPageOptIcon from '../../../public/images/seo/onPageOptIcon.svg';
import seoIcon from '../../../public/images/seo-icon.svg';
import fullStackIcon from '../../../public/images/seo/full-stack-icon.svg';
import ppcIcon from '../../../public/images/f-PPC.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>PPC Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Account Setup</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={ppcIcon} alt="Technical SEO Audit Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                  <s.boxHeading>Landing Page Setup</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={landingpageDesignSetup} alt="Seo Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                  <s.boxHeading>PPC Campaign Setup </s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={ppcIcon} alt="On-page optimization Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                  <s.boxHeading>PPC Campaign Audit</s.boxHeading>
                    <s.textPart>Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={ppcIcon} alt="Off-page optimization Icon" layout="raw" />
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
