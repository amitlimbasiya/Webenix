import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
import * as s from "../../../styles/components/OurExpertise.style";

const OurExpertise = () => {
  return (
    
    <s.OurExpertiseWrapper>
        <Container>
            <s.SectionTagline>
                <span className='before-dash'>Win & Wow With</span>
                <h2>Our Expertise</h2>
            </s.SectionTagline>
            <Row>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box hawkesBlueBg">
                        <s.OurExpertisNumber>01</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/>Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box azaleaBg">
                        <s.OurExpertisNumber>02</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/>Theme integration</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box frenchLilacBg">
                        <s.OurExpertisNumber>03</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/>Theme customization</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box GreenBg">
                        <s.OurExpertisNumber>04</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/> Plugin Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box frozenPeriwinkleBg">
                        <s.OurExpertisNumber>05</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/> Plugin Customization</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box skyBg">
                        <s.OurExpertisNumber>06</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress <br/> Theme development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box yellowBg">
                        <s.OurExpertisNumber>07</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Woocommerce <br/> Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box pinkBg">
                        <s.OurExpertisNumber>08</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Wordpress maintenance <br/> & support</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
            </Row>

    </Container>

    </s.OurExpertiseWrapper>

  );
};

export default OurExpertise