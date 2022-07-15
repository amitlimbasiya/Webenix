import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/WordpressDevelopment/ServiceFeatureBox.style";
import PageBannerImg from "../../../public/images/graphicsDesign/solution-banner-shape.svg";
import BudyyIcon from '../../../public/images/wordpressDevelopment/budyyIcon.svg';
import wooIcon from '../../../public/images/wordpressDevelopment/wooIcon.svg';
import pluginIcon from '../../../public/images/wordpressDevelopment/pluginIcon.svg';
import fullStackIcon from "../../../public/images/full-stack-icon.svg";
import blogDevIcon from '../../../public/images/wordpressDevelopment/blogDevIcon.svg';

const ServiceFeatureBox = () => {
  return (
    <s.ServiceFeatureBox>
        <Container>
            <s.SectionTagline>
                <span className="before-dash">Our Expertise</span>
                <h2>Our Wordpress Development Services</h2>
            </s.SectionTagline>
            <s.ServiceBox className="serviceBoxes">       
                <Row>
                    <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="greenlightPart">
                            <s.partItem className="imgPart">
                                <Image src={PageBannerImg} alt="Frontend Development Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.69 179.26"><defs></defs><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M191.8,262.85c-20.53,1.32-32.31-45-41.43-53.19-17.88-16.12-54.46-22.79-33.83-42.63,9.54-9.18,27.16-20.29,34.64-27.5C166.3,125,155,88.11,175.64,84.06s30.14,20.79,45.89,32.51c10.44,7.76,23.57,9,34.84,14.72,7.76,3.9,12.35,15.13,5.08,22.7C216.45,200.85,226.61,260.61,191.8,262.85Z" transform="translate(-110.41 -83.62)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>Multisite Development</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                   <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="purplePart">
                            <s.partItem className="imgPart">
                                <Image src={wooIcon} alt="WooCommerce Development Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.51 145.95"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M85.19,343.65c-33.57,51.44,30.58,75.1,71.14,75.1,39.9,0,85-15.05,85-61.3C241.31,238.4,142.82,255.38,85.19,343.65Z" transform="translate(-75.8 -272.8)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>WooCommerce Development</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                     <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="yellowPart">
                            <s.partItem className="imgPart">
                                <Image src={pluginIcon} alt="WordPress Plugin Development Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.06 161.27"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M164.87-57.64c0,43.16,25.6,58.53,38.69,33.24,10.1-19.49,22.46-15.17,45-12.76,23.14,2.48,29.6-28.57,49.89-35.9,34.33-12.4,10.67-32.18-5.23-45.33s-7.81-41-31.63-53.36c-19.35-10.08-25.41,27.43-59.78,41.05C155.2-112.2,164.87-96.83,164.87-57.64Z" transform="translate(-164.04 173.45)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>WordPress Plugin Development</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                    <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="saffronPart">
                            <s.partItem className="imgPart">
                                <Image src={fullStackIcon} alt="Theme Customization Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.57 136.84"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M490.89,413.52c-18.76,10.83-34.58-6.41-50.21-16.83-30.65-20.42-75.83,10.44-97.57-30.12-24.07-44.91,0-89.51,46.56-86.28C520,289.33,507.93,403.68,490.89,413.52Z" transform="translate(-333.63 -280.12)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>Theme Customization</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                    <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="purplePart">
                            <s.partItem className="imgPart">
                                <Image src={blogDevIcon} alt="Blog Development Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.1 209.89"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M435.81-82.8c4.35,8.53,4.6,19.29,6.12,28.85,1.41,8.9,7.62,25.12,14.35,31.6,11.63,11.21,37,10.53,45.15-6.4,9.31-19.42.76-43.82-2-64.86-4.27-32.48,20.81-39.47,25.13-71,1.65-12.09-2-29.33-14.27-35.24-15.62-7.51-33.56,2.45-48.37-8.81-5.54-4.21-28.85-31.47-38-3.65-3.29,10-5.42,20.18-7.85,30.36-2.35,9.79-5.15,19.32-10.12,28.11-6.64,11.74-16.55,24.66-9.86,38.17C404.67-98.33,427.72-98.66,435.81-82.8Z" transform="translate(-393.83 224.72)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>Blog Development</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                    <Col lg={3} sm={6} className="itemBoxes">
                        <s.boxPart className="redPart">
                            <s.partItem className="imgPart">
                                <Image src={BudyyIcon} alt="Buddypress Development Icon" layout="raw" />
                                <s.iconOverlay className="overlayImg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210.35 155.44"><g className="cls-1"><g id="Layer_1" data-name="Layer 1"><path className="cls-2" d="M726.05,313.86c-33.8-13.77-36.35-47.47-57.44-59.89-20.67-12.18-42.86-.48-51.53,33.16-9.84,38.23-35.12,46.6-48.57,74.78-5.66,11.85-3.11,34.47,12,40.67,19.82,8.15,39.12-9.22,63.72-15,22.09-5.21,52.94-.34,73.77-1.55,20.42-1.19,42.19,1.71,54.76-17.95C781.07,355,776.72,334.5,726.05,313.86Z" transform="translate(-565.74 -249.28)"/></g></g></svg>
                                </s.iconOverlay>
                            </s.partItem>
                            <s.partItem className="textPart"><s.boxHeading>Buddypress Development</s.boxHeading></s.partItem>
                        </s.boxPart>
                    </Col>
                </Row>
             </s.ServiceBox>
        </Container>
    </s.ServiceFeatureBox>
  );
};

export default ServiceFeatureBox