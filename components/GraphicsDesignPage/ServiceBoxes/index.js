import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/GraphicsDesignPage/SectionServicesBoxes.style";
import logoDesignIcon from '../../../public/images/f-logo-design-icon.svg';
import stationeryIcon from '../../../public/images/f-stationery-design-icon.svg';
import socialMediaIcon from '../../../public/images/f-social-media-icon.svg';
import brandingIcon from '../../../public/images/f-branding-icon.svg';
import packingDesignIcon from '../../../public/images/f-packaging-design-icon.svg';
import videoAnimationIcon from '../../../public/images/f-video-animation-icon.svg';
import shapePinkIcon from '../../../public/images/graphicsDesign/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/graphicsDesign/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/graphicsDesign/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/graphicsDesign/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/graphicsDesign/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/graphicsDesign/shapePurple.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Grahics Design Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Logo Design</s.boxHeading>
                    <s.textPart>Make your business branding unique and up to mark. Bring the designing aspect to the next level. </s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={logoDesignIcon} alt="Logo Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Stationery Design</s.boxHeading>
                    <s.textPart>Get the most innovative design and solution for the packaging and stationery. Webenix crafts unique and efficient designs which are the right fit for your business. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={stationeryIcon} alt="Stationery Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Social Media</s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={socialMediaIcon} alt="Social Media Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Branding</s.boxHeading>
                    <s.textPart>One of the most important for keeping up with the responsiveness is the Landing Page. We make sure it is designed with the right way of placing the CTA and other informative information. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={brandingIcon} alt="Branding Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Packaging Design</s.boxHeading>
                    <s.textPart>We provide end-to-end solutions over two major platforms Android and Ios with clean and sleek designs according to your requirement.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={packingDesignIcon} alt="Packaging Design Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Video & Animation</s.boxHeading>
                    <s.textPart>Push your business to the success road with the help of our talented UI/UX designers. We consider our customer’s specifications in our work.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={videoAnimationIcon} alt="Video & Animation Icon" layout="raw" />
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
