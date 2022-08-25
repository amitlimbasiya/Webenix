import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/SEOPage/SectionServicesBoxes.style";
import webFlowIcon from '../../../public/images/webFlowIcon.svg';
import shapePinkIcon from '../../../public/images/seo/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/seo/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/seo/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/seo/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/seo/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/seo/shapePurple.svg';
import technicalSEOAuditIcon from '../../../public/images/seo/technicalSEOAuditIcon.svg';
import linkBuildingStrategiesIcon from '../../../public/images/seo/linkBuildingStrategiesIcon.svg';
import contentMarketingIcon from '../../../public/images/seo/contentMarketingIcon.svg';
import onPageOptIcon from '../../../public/images/seo/onPageOptIcon.svg';
import seoIcon from '../../../public/images/seo-icon.svg';
import fullStackIcon from '../../../public/images/seo/full-stack-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>SEO Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Technical SEO Audit </s.boxHeading>
                    <s.textPart>We bring the reports that differentiate the results brought by the SEO to your business by preparing the technical SEO audit that mentions the total SERP with the accurate count of visibility of your website content.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={technicalSEOAuditIcon} alt="Technical SEO Audit Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Competitor Analysis </s.boxHeading>
                    <s.textPart>The utter optimization of the competitor’s content strategies includes the backlinks and internal links pattern used by them. It enables the market type and the ongoing trends in the same field.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={seoIcon} alt="Seo Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>On-page optimization</s.boxHeading>
                    <s.textPart>On-going actions on your websites are handled by expertise where activities like internal linking and stuffing keywords will help in boosting the content and website reach by visitors.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={onPageOptIcon} alt="On-page optimization Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Off-page Optimization</s.boxHeading>
                    <s.textPart>Off-page optimization needs utter attention to increase the reach of the website or content of your business. With dedicated consistency, we make sure that off-page activities like generating backlinks and sharing over social media will help in reaching out to maximum people.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={fullStackIcon} alt="Off-page optimization Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Link-building strategies</s.boxHeading>
                    <s.textPart>Link-building strategies lead you to high-quality content building which will create the vast visibility of the websites and ultimately your business. It will help the outreach of your website and content.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={linkBuildingStrategiesIcon} alt="Link-building strategies" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Content Marketing</s.boxHeading>
                    <s.textPart>Content Marketing is the real sense of posting blogs, articles, and other content at the right time and in the most accurate ways with the right amount of keywords stuffed for boosting the reach to the next level.</s.textPart>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={contentMarketingIcon} alt="Content Marketing" layout="raw" />
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
