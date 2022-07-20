import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HireAndroidDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>We Are Different</span>
              <h2>An agency just like you!</h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>We defy the norms and our live 387+ apps on the App store are a great example of our work. The increasing growth stack behind the successful Android apps is a reflection of our passion and obsession for excellent code-quality.</h3>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro