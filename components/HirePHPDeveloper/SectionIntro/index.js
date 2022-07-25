import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/HirePHPDeveloper/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    
    <s.SectionIntroWrapper className="introuction-section separatorPart">
        <Container>
            <s.SectionTagline>
              <span className='before-dash'>Successful business with strong backend</span>
              <h2>Need strong backend development? You are in right place. </h2>
            </s.SectionTagline>
            <s.SectionHeader>
            <h3>Develop a strong backend for the smooth functionality of apps and software, do not let your business wait any longer.</h3>
            <p>Webenix has been into PHP development for more than a decade now, with the core PHP frameworks like Laravel we have been into developing the strong backend for better functionality.</p>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro