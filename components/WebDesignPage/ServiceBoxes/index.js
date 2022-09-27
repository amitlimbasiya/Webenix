import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WebDesignPage/SectionServicesBoxes.style";
import shapeYellowIcon from '../../../public/images/webDesign/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/webDesign/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/webDesign/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/webDesign/shapePurple.svg';
import uiUxIcon from '../../../public/images/f-UIUX-Design.svg';
import mobileAppDesignIcon from '../../../public/images/f-Mobile-App-Design.svg';
import websiteDesignIcon from '../../../public/images/website-design-icon.svg';
import webDesignIcon from '../../../public/images/f-Web-Design.svg';
import landingpageDesignSetup from '../../../public/images/f-landingpage-Design.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Web Design Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web Design</s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes which makes us the best <strong>Web Design Services Company</strong>.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={webDesignIcon} alt="Web Desing Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Landing Page design</s.boxHeading>
                    <s.textPart>Creating a landing page is an important part of showcasing a business. The placement of CTA buttons in the right place will ensure the responsiveness of the landing page. In order to keep up with responsiveness, the Landing Page is crucial. During the design process, we ensure the CTA is placed in the right place along with other information.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={landingpageDesignSetup} alt="Landing Page Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile App Design</s.boxHeading>
                    <s.textPart>We provide end-to-end solutions over two major platforms Android and Ios with clean and sleek designs from our expertise and yet according to your requirements.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="Mobile Applicaiton Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>UI/UX design</s.boxHeading>
                    <s.textPart>Push your business to the success road with the help of our talented UI/UX designers. We consider our customer’s specifications in our work into considerations by using the right tools for it.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={uiUxIcon} alt="UI UX Design Icon" layout="raw" />
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
