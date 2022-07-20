import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireNodeJSDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Success at Speak</span>
              <h2>An agency just like you!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>We don’t just create web platforms; we create impactful experiences with robust backends that users love and your competitors envy. Our NodeJS development services have transformed the story of 122+ businesses. Whether back-end or front-end, our NodeJS skills will help you embark to market faster with rapid MVPs and incredibly scalable products.</h3>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro