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
                  <span className='before-dash'>Excited to</span>
                  <h2>Let&#39;s Engineer A New Future Together</h2>
                </s.SectionTagline>
                <s.SectionHeader>
                  <div className='shapePart'>
                    <h4>Ready for Growth?</h4>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </s.SectionHeader>
              </Col>
            </Row>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro