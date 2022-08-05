import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../styles/components/WebDevelopmentPage/SectionServicesBoxes.style";
import cmsIcon from '../../public/images/cms-icon.svg';
import shapePinkIcon from '../../public/images/cmsDevelopment/shapePink.svg';
import shapeOrangeIcon from '../../public/images/cmsDevelopment/shapeOrange.svg';
import shapeYellowIcon from '../../public/images/cmsDevelopment/shapeYellow.svg';
import shapeGreenIcon from '../../public/images/cmsDevelopment/shapeGreen.svg';
import shapeBlueIcon from '../../public/images/cmsDevelopment/shapeBlue.svg';
import shapePurpleIcon from '../../public/images/cmsDevelopment/shapePurple.svg';
import mobileAppDesignIcon from '../../public/images/mobile-app-design-icon.svg';
import codeIcon from '../../public/images/codeIcon.svg';
import eCommerceIcon from '../../public/images/eCommerce-icon.svg';
import frontEndIcon from '../../public/images/front-end-development-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Our Web Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>CMS Development</s.boxHeading>
                    <s.textPart>We bring solutions by developing CMS for your business that helps facilitate, tailor, organize, modify, and plan the web content in the most accurate ways.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={cmsIcon} alt="WordPress Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="purplePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Ecommerce Development</s.boxHeading>
                    <s.textPart>Let us help in showcasing your business in the most organized ways for your customers that will align your brand voice by creating a perfect eCommerce element facilitating faster selling profit elements.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={eCommerceIcon} alt="Woocommerce Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePurpleIcon} alt="Shape Purple Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web App Development</s.boxHeading>
                    <s.textPart>Give the extravagant push to your business by creating the best web app for your business ensuring the escalation in the growth. </s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={cmsIcon} alt="Webflow Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Mobile API development</s.boxHeading>
                    <s.textPart>Providing the leverage of connecting the mobile applications with the third party integration with Mobile API Development services by Webenix.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={mobileAppDesignIcon} alt="CMS Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Backend Development</s.boxHeading>
                    <s.textPart>Offering backend development services for various web apps, cloud-based applications, and multiple domains which users will never see and yet making sure of performing the same as the back and front.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={codeIcon} alt="Code Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Frontend Development</s.boxHeading>
                    <s.textPart>Taking care of the responsiveness on multiple screens, we maximize the user experience by developing attractive designs considering tiny details. </s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={frontEndIcon} alt="Front end development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Orange Icon" layout="raw" />
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
