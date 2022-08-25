import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WordpressDevelopment/SectionServicesBoxes.style";
import fullStackIcon from "../../../public/images/full-stack-icon.svg";
import shapePinkIcon from '../../../public/images/wordpressDevelopment/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/wordpressDevelopment/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/wordpressDevelopment/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/wordpressDevelopment/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/wordpressDevelopment/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/wordpressDevelopment/shapePurple.svg';
import wooIcon from '../../../public/images/wordpressDevelopment/wooIcon.svg';
import blogDevIcon from '../../../public/images/wordpressDevelopment/blogDevIcon.svg';
import budyyIcon from '../../../public/images/wordpressDevelopment/budyyIcon.svg';
import codeigniteIcon from '../../../public/images/wordpressDevelopment/codeigniteIcon.svg';
import pluginIcon from '../../../public/images/wordpressDevelopment/pluginIcon.svg';
import frontEndDevelopmentIcon from '../../../public/images/front-end-development-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Our Wordpress Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Multisite Development</s.boxHeading>
                    <s.textPart>Make your business branding unique and up to mark. Bring the designing aspect to the next level. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={frontEndDevelopmentIcon} alt="WordPress Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>WooCommerce Development</s.boxHeading>
                    <s.textPart>Get the most innovative design and solution for the packaging and stationery. Webenix crafts unique and efficient designs which are the right fit for your business. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={wooIcon} alt="WooCommerce Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>WordPress Plugin Development</s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={pluginIcon} alt="WordPress Plugin Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Theme Customization </s.boxHeading>
                    <s.textPart>One of the most important for keeping up with the responsiveness is the Landing Page. We make sure it is designed with the right way of placing the CTA and other informative information. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={fullStackIcon} alt="WordPress Theme Customization Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Blog Development </s.boxHeading>
                    <s.textPart>We provide end-to-end solutions over two major platforms Android and Ios with clean and sleek designs according to your requirement.</s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={blogDevIcon} alt="WordPress Blog Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Oragne Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Buddypress Development</s.boxHeading>
                    <s.textPart>We provide end-to-end solutions over two major platforms Android and Ios with clean and sleek designs according to your requirement.</s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={budyyIcon} alt="Buddypress Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Oragne Icon" layout="raw" />
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
