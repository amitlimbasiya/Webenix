import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/CMSDevelopmentPage/SectionServicesBoxes.style";
import webDevelopmentIcon from '../../../public/images/web-development-icon.svg';
import eCommerceIcon from '../../../public/images/eCommerce-icon.svg';
import webFlowIcon from '../../../public/images/webFlowIcon.svg';
import shapePinkIcon from '../../../public/images/cmsDevelopment/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/cmsDevelopment/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/cmsDevelopment/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/cmsDevelopment/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/cmsDevelopment/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/cmsDevelopment/shapePurple.svg';
import mobileAppDesignIcon from '../../../public/images/mobile-app-design-icon.svg';
import backendDevelopmentIcon from '../../../public/images/backend-development-icon.svg';
import frontEndDevelopmentIcon from '../../../public/images/front-end-development-icon.svg';
import wordpressIcon from '../../../public/images/wordpress-icon.svg';
import HubspotIcon from '../../../public/images/hubspot-icon.svg';
import PSDWordPressIcon from '../../../public/images/PSDWordPressIcon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>CMS Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>WordPress Development</s.boxHeading>
                    <s.textPart>WordPress is one of the renowned CMS platforms where managing content becomes much easier with the varied themes and ability to install the plug-ins for better-looking websites and accurate management.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={wordpressIcon} alt="WordPress Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Hubspot Development</s.boxHeading>
                    <s.textPart>Get the personalized Hubspot development from our expert teams to make your business look professional and real. Generate more leads, escalate your business and easily convert visitors into potential clients.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={HubspotIcon} alt="Hubspot Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>            
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>CMS Customization</s.boxHeading>
                    <s.textPart>Stand out from the crowd, and customize your content management platform with your choice. Leave your worries about thinking about unique ideas and make Webenix your partner to make the prominent CMS Customization Development.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="CMS Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Theme Integration</s.boxHeading>
                    <s.textPart>With the help of theme integration, easily decide what themes suit the best website in your business.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={backendDevelopmentIcon} alt="Theme Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>PSD to WordPress</s.boxHeading>
                    <s.textPart>Do not worry about the complex dynamic structures, PSD to WP is the most efficient conversion that turns out in a meaningful way. We totally custom-code the backend of WordPress to make it most fruitful for the business.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={PSDWordPressIcon} alt="PSD to WordPress Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Purple Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Webflow Development</s.boxHeading>
                    <s.textPart>Webflow development companies are specially built to drive business by developing websites which are highly responsive. Partner with Webenix to drive your business in the most unique ways.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={webFlowIcon} alt="Webflow Development Icon" layout="raw" />
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
