import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireGraphicsDesignerPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Clean and sleek designs</span>
              <h2>Brand development and growth are what we aim for your business!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>A good design tells a lot about the brand, let us create an impeccable brand for you.</h3>
            <p>Gone are those days which had the existence of primary colours in front of your eyes. With the advancement in the designs, we make sure to make your business look miscellaneous by embedding our aim and goal towards growing your company.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro