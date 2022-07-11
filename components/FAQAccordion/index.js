import React from 'react';
import { Accordion,  Container, Row } from 'react-bootstrap';
import * as s from "../../styles/components/FAQAccordion.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';

const FAQAccordion = () => {
  return (
    <s.FAQAccordionWrapper className='noiseBg'>
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Take a look at</span>
              <h2>FAQ</h2>
            </s.SectionTagline>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="pink-color">Data Privacy <FontAwesomeIcon icon={faAngleDown} /></Accordion.Header>
                    <Accordion.Body>
                        <p>We respect privacy of our clients data and sign NDA before starting the project.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header  className="magicmint-color">Infrastructure <FontAwesomeIcon icon={faAngleDown} /></Accordion.Header>
                    <Accordion.Body>
                        <p>We have High end infrastructure with Core i5/i7 Systems/2 Internet Lines/Power Backup/Security Cameras.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header  className="lavenderblue-color">Payment Methods <FontAwesomeIcon icon={faAngleDown} /></Accordion.Header>
                    <Accordion.Body>
                        <p>We accept payments through Paypal, Wire transfer. However we are open for other options suitable to you.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header  className="blond-color">Communication <FontAwesomeIcon icon={faAngleDown} /></Accordion.Header>
                    <Accordion.Body>
                        <p>You can choose any communication channel that best suits you—phone, Email, Skype and Project Management System.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    </s.FAQAccordionWrapper>
  );
};

export default FAQAccordion;