import React from 'react';
import Image from "next/image"; 
import { Container, Row, Col } from "react-bootstrap";
import * as s from "../../../styles/components/PHPDevelopment/SectionIntro.style"; 

const SectionIntro = () => {
  return (
    <>
      <s.SectionIntroWrapper className="introuction-section separatorPart">
          <Container>
              <s.SectionTagline>
                <span className='before-dash'>We are Different</span>
                <h2>Nothing But The Best With PHP Development Services</h2>
              </s.SectionTagline>
              <s.SectionHeader>
              <p>PHP is considered as the time honoured and most widely used programming language for the web. It remained popular because of its reliability, scalability, lightweight code and easy deployment. Today, businesses can’t win if you continuously strive with a slow developer and a hamstrung PHP team. Even your frontend won’t capture hearts of people if you don’t have a backend that empowers your digital presence. Businesses willing to secure fast paced growth with the PHP development know the value of a dedicated PHP Developers team.</p>
              <p>We are assured that we are among the best PHP Development Companies who are ready to be hired and prove our excellence in building winning websites. We dream like you and have strong experience to endorse it.</p>
              </s.SectionHeader>
          </Container>
      </s.SectionIntroWrapper>
    </>
  );
};

export default SectionIntro