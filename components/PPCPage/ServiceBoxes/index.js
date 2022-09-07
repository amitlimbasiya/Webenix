import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/SEOPage/SectionServicesBoxes.style";
import shapePinkIcon from '../../../public/images/seo/shapePink.svg';
import shapeYellowIcon from '../../../public/images/seo/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/seo/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/seo/shapeBlue.svg';
import landingpageDesignSetup from '../../../public/images/f-landingpage-Design.svg';
import campaignSetup from '../../../public/images/f-PPC-Campaign-Setup.svg';
import campaignAuditIcon from '../../../public/images/f-PPC-Campaign-Audit.svg';
import AccountSetupIcon from '../../../public/images/f-Account-Setup.svg';
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
                    <s.textPart>As a company, we are only successful if you recognize the value of our work. Following the completion of the project, you will receive full ownership rights for the account. Regardless of your status with your own account and all the work in it only with Webenix.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={AccountSetupIcon} alt="Account Setup Icon" layout="raw" />
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
                    <s.textPart>We help you in setting up the landing page setup.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={landingpageDesignSetup} alt="Landing Page Setup Icon" layout="raw" />
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
                    <s.textPart>According to your advertising budget and goals, we will set up a minimum of two PPC campaigns with optimized campaign settings, researched keywords, and compelling ad copy.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={campaignSetup} alt="PPC Campaign Setup Icon" layout="raw" />
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
                    <s.textPart>We do not keep you unaware of any activity that we do consider SEO and PPC. With the full monthly report, we channelise the audit report with the detail the clarity that brings in your business to analyze what should be avoided and focused on.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={campaignAuditIcon} alt="PPC Campaign Audit Icon" layout="raw" />
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
