import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireNodeJSDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Stretch the incredibility with Node JS</span>
              <h2>Give your business wings with Node JS Mobile Application Development. </h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Let us bring the potential change in your business by Node JS Mobile Application Development. </h3>
            <p>NodeJS is the best for developing high-quality projects. It brings a game-changing and revolutionary effect for the business considering digitization. With the help of our highly talented and skilful bunch of NodeJS developers, get the best on-the-go services from Webenix.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro