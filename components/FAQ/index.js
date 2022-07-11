import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/FAQ.style";

const FAQ = () => {
  return (
    <s.FAQWrapper className='noiseBg'>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>FAQ</h2>
            </s.SectionTagline>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <s.FAQBox className="FAQbox">
                        <s.FAQTitle className="pink-color">Data Privacy</s.FAQTitle>
                        <p>We respect privacy of our clients data and sign NDA before starting the project.</p>
                    </s.FAQBox>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <s.FAQBox className="FAQbox">
                        <s.FAQTitle className="magicmint-color">Infrastructure</s.FAQTitle>
                        <p>We have High end infrastructure with Core i5/i7 Systems/2 Internet Lines/Power Backup/Security Cameras.</p>
                    </s.FAQBox>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <s.FAQBox className="FAQbox">
                        <s.FAQTitle className="lavenderblue-color">Payment Methods</s.FAQTitle>
                        <p>We accept payments through Paypal, Wire transfer. However we are open for other options suitable to you.</p>
                    </s.FAQBox>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <s.FAQBox className="FAQbox">
                        <s.FAQTitle className="blond-color">Communication</s.FAQTitle>
                        <p>You can choose any communication channel that best suits you—phone, Email, Skype and Project Management System.</p>
                    </s.FAQBox>
                </Col>
            </Row>
        </Container>
    </s.FAQWrapper>
  );
};

export default FAQ;