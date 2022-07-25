import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireAndroidDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Get the best from the best</span>
              <h2>Be a part of the $400 industry</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Leverage your performance experience with custom mobile app development.</h3>
            <p>Breaking the monotonous working of mobile apps, we believe in creating magic for you. The demand for the mobile application amongst users defines strong code development. </p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro