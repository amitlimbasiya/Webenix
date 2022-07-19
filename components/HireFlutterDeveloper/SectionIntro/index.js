import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/AboutPage/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Success at Speak</span>
              <h2>An agency just like you!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Harnessing the power of mobility with cross-platform compatibility, we have been early adopters of Flutter since it’s launch. Know for rapid application development team, ease of programming and native driven performance Flutter is a great choice for making mobile applications.</h3>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro