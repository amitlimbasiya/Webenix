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
                        <s.OurExpertisTitle>Custom PHP Web Application Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box azaleaBg">
                        <s.OurExpertisNumber>02</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Custom Logistic Solution Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box frenchLilacBg">
                        <s.OurExpertisNumber>03</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Custom Website Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box GreenBg">
                        <s.OurExpertisNumber>04</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Enterprise Web Portal Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box frozenPeriwinkleBg">
                        <s.OurExpertisNumber>05</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Custom PHP eCommerce</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box skyBg">
                        <s.OurExpertisNumber>06</s.OurExpertisNumber>
                        <s.OurExpertisTitle>CMS Development Solutions</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box yellowBg">
                        <s.OurExpertisNumber>07</s.OurExpertisNumber>
                        <s.OurExpertisTitle>API Integration & Development</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
                <Col lg={3} md={4} sm={12}>
                    <s.OurExpertisBox className="ourexpertis-box pinkBg">
                        <s.OurExpertisNumber>08</s.OurExpertisNumber>
                        <s.OurExpertisTitle>Website Maintenance & Supports</s.OurExpertisTitle>
                    </s.OurExpertisBox>
                </Col>
            </Row>

    </Container>

    </s.OurExpertiseWrapper>

  );
};

export default OurExpertise