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
            <h3>We have been working in PHP since Codeigniter and CakePHP used to lead the race over a decade back. Right now we work on ALL available PHP frameworks including our core expertise in Laravel, Yii, Zend, Symfony, FuelPHP, Phalcon and other custom PHP frameworks.</h3>
            </s.SectionHeader>
        </Container>
    </s.SectionIntroWrapper>

  );
};

export default SectionIntro