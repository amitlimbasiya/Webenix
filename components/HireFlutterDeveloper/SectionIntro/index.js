import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireFlutterDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Harness the mobility </span>
              <h2>Explore the most demanded cross-platform.</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Leverage creativity and build concepts and experience native-like apps. </h3>
            <p>The revolutionary launch by the Google-Flutter is one of the best cross-platforms that has set the highest records for developers using it for giving the Native touch for developing mobile applications.  Build the most sophisticated mobile apps, with easy and attractive interfaces. </p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro