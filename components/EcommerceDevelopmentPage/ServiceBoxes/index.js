import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/EcommerceDevelopmentPage/SectionServicesBoxes.style";
import shapeGreenIcon from '../../../public/images/eCommerceDevelopment/shapeGreen.svg';
import shapeOrange from '../../../public/images/eCommerceDevelopment/shapeOrange.svg';
import shapePurpleIcon from '../../../public/images/eCommerceDevelopment/shapePurple.svg';
import magentoIcon from '../../../public/images/f-magento-icon.svg';
import shopifyIcon from '../../../public/images/f-shopify-icon.svg';
import eCommerceIcon from '../../../public/images/f-eCommerce-Development.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>eCommerce Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>WooCommerce Development</s.boxHeading>
                    <s.textPart>Stand out of the box, develop the WooCommerce store to carry eCommerce business strongly. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={eCommerceIcon} alt="WooCommerce Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Shopify Development</s.boxHeading>
                    <s.textPart>Compete for your online store with the best Shopify development. Give your online business the wings of reality consisting of the best themes and sleek features.</s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                <Image src={shopifyIcon} alt="Shopify Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Magento Development</s.boxHeading>
                    <s.textPart>We are a dictionary of Magento Development, let us build the A1 Magento store for you. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={magentoIcon} alt="Magento Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrange} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Custom eCommerce</s.boxHeading>
                    <s.textPart>We are a dictionary of Magento Development, let us build the A1 Magento store for you. </s.textPart>
                    
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={eCommerceIcon} alt="Custom eCommerce Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrange} alt="Shape Orange Icon" layout="raw" />
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
