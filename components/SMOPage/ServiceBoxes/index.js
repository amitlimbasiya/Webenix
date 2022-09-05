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
                    <s.textPart>A paid social media strategy relies heavily on an organic social media presence. With the right resources and expertise, we can help you build and manage an organic social media account setup that will sustain long-term brand advocacy and customer engagement.</s.textPart>
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
                    <s.textPart>With the ongoing trends around social media, we help in keeping up with the trends that help in being amongst the market but with the utmost creativity. Not only do we help in building organic traffic but we also help in the paid promotion of the social media posts that will give the company profile the best version of it.</s.textPart>
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
                    <s.textPart>By understanding your user&apos;s goals and behaviors, you can increase user engagement and retention. As part of any redesign or migration project, we assist your team in ensuring the best possible User Experience (UX) by implementing best practices in web design and SEO content creation.</s.textPart>
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
                    <s.textPart>In order to achieve your advertising goals, our team creates dedicated PPC landing pages. Each step of the way, we will be your partners, teaching your team best practices and sharing valuable insights to enhance conversion rates. Our team will work with you to develop a content plan for your PPC landing pages, podcast ads, and digital PR campaigns.</s.textPart>
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
