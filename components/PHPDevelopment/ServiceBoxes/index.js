import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/PHPDevelopment/SectionServicesBoxes.style";
import symfonyIcon from "../../../public/images/phpDevelopment/symfonyIcon.svg";
import shapePinkIcon from '../../../public/images/phpDevelopment/shapePink.svg';
import shapeOrangeIcon from '../../../public/images/phpDevelopment/shapeOrange.svg';
import shapeYellowIcon from '../../../public/images/phpDevelopment/shapeYellow.svg';
import shapeGreenIcon from '../../../public/images/phpDevelopment/shapeGreen.svg';
import shapeBlueIcon from '../../../public/images/phpDevelopment/shapeBlue.svg';
import laravelIcon from '../../../public/images/laravel-icon.svg';
import yiiIcon from '../../../public/images/phpDevelopment/yiiIcon.svg';
import zendIcon from '../../../public/images/phpDevelopment/zendIcon.svg';
import codeigniteIcon from '../../../public/images/phpDevelopment/codeigniteIcon.svg';

const SectionServiceBoxes = () => {
  return (
    <>
      <s.SectionServiceTop className="servicesTop">
        <Container>
          <s.SectionTagline>
            <span className="before-dash">Our Expertise</span>
            <h2>Our PHP Development Services</h2>
          </s.SectionTagline>
        </Container>
      </s.SectionServiceTop>
      <s.ServiceBox className="serviceBoxes">
        <Container>
          <Row>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="pinkPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Laravel </s.boxHeading>
                    <s.textPart>Make your business branding unique and up to mark. Bring the designing aspect to the next level. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={laravelIcon} alt="Laravel Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapePinkIcon} alt="Shape Pink Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="greenPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Yii </s.boxHeading>
                    <s.textPart>Get the most innovative design and solution for the packaging and stationery. Webenix crafts unique and efficient designs which are the right fit for your business. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={yiiIcon} alt="Frontend Development Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeGreenIcon} alt="Shape Green Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="yellowPart">
                <s.partItem className="textPart">
                    <s.boxHeading>Zend </s.boxHeading>
                    <s.textPart>We have a team of intrinsic designers that maps down the accurate website design for your business taking care of the responsiveness for all the screen sizes. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={zendIcon} alt="Zend Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeYellowIcon} alt="Shape Yellow Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="bluePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Symfony </s.boxHeading>
                    <s.textPart>One of the most important for keeping up with the responsiveness is the Landing Page. We make sure it is designed with the right way of placing the CTA and other informative information. </s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={symfonyIcon} alt="Symfony Icon" layout="raw" />
                  <s.iconOverlay className="overlayImg">
                    <Image src={shapeBlueIcon} alt="Shape Blue Icon" layout="raw" />
                  </s.iconOverlay>
                </s.partItem>
              </s.boxPart>
            </Col>
            <Col lg={6} md={12} className="itemBoxes">
              <s.boxPart className="orangePart">
                <s.partItem className="textPart">
                    <s.boxHeading>Codeigniter </s.boxHeading>
                    <s.textPart>We provide end-to-end solutions over two major platforms Android and Ios with clean and sleek designs according to your requirement.</s.textPart>
                    <Link href='#'>
                        <a className='linkPart'>Learn More &#8594;</a>
                    </Link>
                </s.partItem>
                <s.partItem className="imgPart">
                  <Image src={codeigniteIcon} alt="Mobile Applicaiton Icon" layout="raw" />
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
