import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WebDesignPage/SectionServicesBoxes.style";
import PageBannerImg from "../../../public/images/webDesign/solution-banner-shape.svg";
import shapePinkIcon from '../../../public/images/webDesign/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/webDesign/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/webDesign/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/webDesign/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/webDesign/shapeBlue.svg';
import shapePurpleIcon from '../../../public/images/webDesign/shapePurple.svg';
import uiUxIcon from '../../../public/images/ui-ux-icon.svg';
import mobileAppDesignIcon from '../../../public/images/mobile-app-design-icon.svg';
import websiteDesignIcon from '../../../public/images/website-design-icon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Our Front-End Development Services</h2>
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
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={PageBannerImg} alt="Frontend Development Icon" layout="raw" />
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
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={PageBannerImg} alt="Frontend Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeOrangeIcon} alt="Shape Orange Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Web Design</s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes. </s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={websiteDesignIcon} alt="Web Desing Icon" layout="raw" />
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
                    <s.textPart>A landing page is one of the important parts of showcasing the business. Taking care of the responsiveness by placing the CTA buttons in the right place will be part of the accurate landing page design.</s.textPart>
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={websiteDesignIcon} alt="Landing Page Design Icon" layout="raw" />
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
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
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
                    <Link href='/'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
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
