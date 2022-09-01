import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/UIUXDesignPage/SectionServicesBoxes.style";
import prototypeIcon from "../../../public/images/design-prototype-banner-icon.svg";
import shapePinkIcon from '../../../public/images/uiuxDesign/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/uiuxDesign/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/uiuxDesign/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/uiuxDesign/shapeGreen.svg';
import psdHtmlIcon from '../../../public/images/f-psd-html-icon.svg';
import responsiveIcon from '../../../public/images/f-responsive-icon.svg';
import mobileAppDesignIcon from '../../../public/images/f-mobile-app-design-icon.svg';
import webDesignIcon from '../../../public/images/f-Web-Design.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>UI/UX Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes mb-md-5">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Responsive Websites</s.boxHeading>
                    <s.textPart>Make your business branding unique and up to mark. Bring the designing aspect to the next level. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={responsiveIcon} alt="Responsive Websites Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile UI Design</s.boxHeading>
                    <s.textPart>Get the most innovative design and solution for the packaging and stationery. Webenix crafts unique and efficient designs which are the right fit for your business. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="Mobile UI Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>PSD to HTML</s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={psdHtmlIcon} alt="PSD to HTML Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Prototype Design</s.boxHeading>
                    <s.textPart>One of the most important for keeping up with the responsiveness is the Landing Page. We make sure it is designed with the right way of placing the CTA and other informative information. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={webDesignIcon} alt="Prototype Design Icon" layout="raw" />
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
