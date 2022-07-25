import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireWebDesignerPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Expertise in responsive website design</span>
              <h2>Remove the line between Customers and Business owners. </h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Our website design will be fitted in any screen size in front of you. Get yourself a website with zero responsive issues.</h3>
            <p>We look for our customer’s requirements and make sure to fulfil their vision. With the affordable pricing figure, we make sure to design a website that fits any screen size. Customers get to experience the class functionality with a high ROI. </p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro