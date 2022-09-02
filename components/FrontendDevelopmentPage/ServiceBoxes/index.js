import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/FrontendDevelopmentPage/SectionServicesBoxes.style";
import shapeBlueIcon from '../../../public/images/frontendDevelopment/shapeBlue.svg';
import shapeGreenIcon from '../../../public/images/frontendDevelopment/shapeGreen.svg';
import shapePastelPink from '../../../public/images/frontendDevelopment/shapePastelPink.svg';
import shapeMorningGloryIcon from '../../../public/images/frontendDevelopment/shapeMorningGlory.svg';
import backendDevelopmentIcon from '../../../public/images/backend-development-icon.svg';
import javascriptIcon from '../../../public/images/frontendDevelopment/javascriptIcon.svg';
import angularIcon from '../../../public/images/f-angular-icon.svg';
import uiUxIcon from '../../../public/images/f-UIUX-Design.svg';
import ReactJSIcon from '../../../public/images/f-reactJS-big-Icon.svg';
import vueJsIcon from '../../../public/images/f-vue-js-icon.svg';
import nodeJsIcon from '../../../public/images/f-NodeJS-Icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Front-End Development Services</h2>
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
              <s.boxPart className="PastelPinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>UI/UX <br/>Design</s.boxHeading>
                    <s.textPart>Push your business to the success road with the help of our talented UI/UX designers. We consider our customer’s specifications in our work into considerations by using the right tools for it.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={uiUxIcon} alt="UIUX Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePastelPink} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>React JS Development</s.boxHeading>
                    <s.textPart>React JS has the UI-centric library that helps in building the intuitive and dynamic mobile application with strong frontend code development and visuals.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={ReactJSIcon} alt="Reactjs Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Vue JS Development</s.boxHeading>
                    <s.textPart>If you are looking to develop a light yet versatile app, Vue JS is the right choice. Develop the feature and functionality-centric apps. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={vueJsIcon} alt="Vue Js Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="PastelPinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Angular JS Development</s.boxHeading>
                    <s.textPart>For component-based frontend development Angular JS is the leading choice of frontend development.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={angularIcon} alt="Angular js Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePastelPink} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="MorningGloryPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Javascript Development</s.boxHeading>
                    <s.textPart>It helps in bringing the dynamic and yet responsive consisting of sleek features that bring the biggest impact on your application’s functionality.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={nodeJsIcon} alt="Javascript Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeMorningGloryIcon} alt="Shape Purple Icon" layout="raw" />
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
