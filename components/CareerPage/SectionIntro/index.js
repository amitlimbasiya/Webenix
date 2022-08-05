import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/CareerPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section">
        <Container>
            <Row>
              <Col md={12}>
                <s.SectionTagline>
                  <span className='before-dash'>Seek Growth</span>
                  <h2>Let&#39;s Engineer A New Future Together</h2>
                </s.SectionTagline>
                <s.SectionHeader>
                  <div className='shapePart'>
                    <h4>Ready for Growth?</h4>
                  </div>
                  <p>We breathe technology and digitalisation. We aim to hire the real geeks and yet passionate to build their own futuristic innovative years ahead while working with Webenix. We are looking for a bunch of creative heads who thrive to build the best on-going trendy products, keeping up with the organization. If you think you are the right fit for the role of a highly qualified developer who will build the strongest product, then we welcome you with open arms.</p>
                </s.SectionHeader>
              </Col>
            </Row>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro