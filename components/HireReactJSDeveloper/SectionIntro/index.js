import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireReactJSDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Success at Speak</span>
              <h2>An agency just like you!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>With 65+ ReactJS applications delivered successfully under our belt, our concrete action to utilize different aspects of the javascript library into the project have proved worthwhile. Our industry-centric expertise empowers us to grab the unique edge formula for your business and work on any project irrelevance of the complexity.</h3>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro